import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadJoinedSubreddits } from "../../utils/localStorage";

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
    joinedSubreddits: loadJoinedSubreddits(),
};

const SubredditsSlice = createSlice({
    name:'SubredditsSlice',
    initialState,
    reducers:{
        joinSubreddit:(state,action)=>{
            if(!state.joinedSubreddits.includes(action.payload)){
            state.joinedSubreddits.push(action.payload);
        }
        },
        unjoinSubreddit: (state,action)=>{
                state.joinedSubreddits = state.joinedSubreddits.filter(s=> s!== action.payload);
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

export const { joinSubreddit, unjoinSubreddit} = SubredditsSlice.actions;
export default SubredditsSlice.reducer;