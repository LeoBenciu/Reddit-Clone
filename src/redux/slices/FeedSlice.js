import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    feed: [],
    loading: false,
    loadingMore: false,
    error: null
};

const FeedSlice = createSlice({
    name:'FeedSlice',
    initialState,
    reducers:{
        fetchFeed: (state,action)=>{
            state.feed = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchMoreFeed:(state,action)=>{
            state.feed = [...state.feed, ...action.payload];
            state.loadingMore = false;
            state.error = null;
        },
        refreshFeed:(state,action)=>{
            state.feed = action.payload;
            state.loading = false;
            state.error = null;
        },
        setLoading:(state,action)=>{
            state.loading = action.payload;
        },
        setLoadingMore:(state,action)=>{
            state.loadingMore = action.payload;
        },
        setError:(state,action)=>{
            state.loading = action.payload;
        },
        likePostInFeed:(state,action)=>{
            const post = state.feed.find(post=> post.id === action.payload);
            if (post){
                post.isLiked= true;
            }
        }
    }
})

export const { fetchFeed, fetchMoreFeed, setLoading, setLoadingMore, setError, likePostInFeed, refreshFeed} = FeedSlice.actions;
export default FeedSlice.reducer;