import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTheSubreddits = createAsyncThunk(
    'subreddits/fetchSubreddits',
    async ()=>{
        const response = await fetch('https://www.reddit.com/subreddits/popular.json?limit=50');
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const subreddits = data.data.children.map((subreddit)=> subreddit.data);
        console.log('SUBREDDITS:',subreddits);
        return subreddits;
    }
)

const initialState = {
    subreddits: [],
    status: 'idle',
    error: null,
    selectedSubreddit: null,
    subscribedSubreddits: []
};

const SubredditsSlice = createSlice({
    name:'SubredditsSlice',
    initialState,
    reducers:{
        subscribeToSubreddit:(state,action)=>{
            const subreddit = state.subreddits.find(subreddit=>subreddit.id === action.payload);
            if (subreddit){
                subreddit.isSubscribed = true;
                
                if (!state.subscribedSubreddits.some(sub=>sub.id === subreddit.id)){
                    state.subscribedSubreddits.push(subreddit);
                }
            }
        },
        unsubscribeFromSubreddit: (state,action)=>{
            const subreddit = state.subreddits.find(subreddit=>subreddit.id === action.payload);
            if (subreddit){
                subreddit.isSubscribed = false;
                state.subscribedSubreddits = state.subscribedSubreddits.filter(subre => subre.id !== subreddit.id);
            }
        }
    },
    extraReducers: (builder)=>{
        builder
            .addCase(fetchTheSubreddits.pending,(state)=>{
                state.status = 'loading';
            })
            .addCase(fetchTheSubreddits.rejected, (state,action)=>{
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchTheSubreddits.fulfilled,(state,action)=>{
                state.status = 'fulfilled';
                state.subreddits = action.payload;
            })
    },
})

export const { subscribeToSubreddit, unsubscribeFromSubreddit} = SubredditsSlice.actions;
export default SubredditsSlice.reducer;