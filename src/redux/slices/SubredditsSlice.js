import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subreddits: [],
    loading: false,
    error: null,
    selectedSubreddit: null,
    subscribedSubreddits: []
};

const SubredditsSlice = createSlice({
    name:'SubredditsSlice',
    initialState,
    reducers:{
        fetchSubreddits:(state,action)=>{
            state.subreddits = action.payload;
            state.loading = false;
            state.error = null;
        },
        setError:(state,action)=>{
            state.error = action.payload;
        },
        subscribeToSubreddit:(state,action)=>{
            const subreddit = state.subreddits.find(subreddit=>subreddit.id === action.payload);
            if (subreddit){
                subreddit.isSubscribed = true;
                
                if (!state.subscribedSubreddits.some(sub=>sub.id === subreddit.id)){
                    state.subscribedSubreddits.push(subreddit);
                }
            }
        },
        setLoading:(state,action)=>{
            state.loading = action.payload;
        },
        unsubscribeFromSubreddit: (state,action)=>{
            const subreddit = state.subreddits.find(subreddit=>subreddit.id === action.payload);
            if (subreddit){
                subreddit.isSubscribed = false;
                state.subscribedSubreddits.filter(subre=> subre.id !== subreddit.id);
            }
        }
    }
})

export const {fetchSubreddits, setError, setLoading, subscribeToSubreddit, unsubscribeFromSubreddit} = SubredditsSlice.actions;
export default SubredditsSlice.reducer;