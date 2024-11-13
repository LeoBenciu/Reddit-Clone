import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadSavedPostIds, saveSavedPostIds } from "../../utils/localStorage";

const savedPostIds = loadSavedPostIds();


export const fetchTheFeed = createAsyncThunk(
    'feed/fetchFeed',
     async (content = 'r/popular') =>{
        const response = await fetch(`https://www.reddit.com/${content}/new.json?limit=30`);
        const data = await response.json();
        const posts = data.data.children.map((post)=>post.data);
        console.log(`FetchedFeed for ${content}:`, posts);
        return posts;
    }
)

const initialState = {
    feed: [],
    currentContent: 'r/popular',
    status: 'idle',
    error: null,
    loadMore: true,
};

const FeedSlice = createSlice({
    name:'FeedSlice',
    initialState,
    reducers:{
        setCurrentContent: (state, action) => {
            state.currentContent = action.payload;
          },
        upvotePost: (state, action) => {
            const post = state.feed.find(p => p.id === action.payload);
            if (post) {
              if (post.userVote === 1) {
                post.score -= 1;
                post.userVote = 0;
              } else {
                if (post.userVote === -1) {
                  post.score += 1;
                }
                post.score += 1;
                post.userVote = 1;
              }
            }
        },
        downvotePost: (state, action) => {
            const post = state.feed.find(p => p.id === action.payload);
            if (post) {
              if (post.userVote === -1) {
                post.score += 1;
                post.userVote = 0;
              } else {
                if (post.userVote === 1) {
                  post.score -= 1;
                }
                post.score -= 1;
                post.userVote = -1;
              }
            }
        },
        hidePost: (state,action)=>{
            const post = state.feed.find(p=>p.id === action.payload);
            if(post){
                post.isVisible = false;
            }
        },
        toggleSave: (state,action)=>{
            const post = state.feed.find(p=>p.id === action.payload);
            if(post){
                post.isSaved = !post.isSaved;
                const currentSavedPostIds = state.feed
                    .filter(p=> p.isSaved)
                    .map(p=> p.id);
                saveSavedPostIds(currentSavedPostIds);
            }
        },
        toggleReport: (state,action)=>{
            const post = state.feed.find(p=>p.id === action.payload);
            if(post){
                post.isReported = !post.isReported;
            }
        },
        loadMoreFeed: (state)=>{
            state.loadMore = true;
        },
        },
    extraReducers: (builder)=> {
        builder
            .addCase(fetchTheFeed.pending, (state)=>{
                state.status = 'loading';
            })
            .addCase(fetchTheFeed.rejected, (state,action)=>{
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchTheFeed.fulfilled, (state,action)=>{
                state.status = 'fulfilled';
                const posts = action.payload.map(post=>({
                    ...post,
                    userVote: 0,
                    isVisible: true,
                    isReported: false,
                    isSaved: savedPostIds.includes(post.id),
                }))
                if(state.loadMore){
                    state.feed = [...state.feed, ...posts];
                } else{
                state.feed = posts};
                state.currentContent = action.meta.arg;
                state.loadMore = false;
            })
    },
    }
)

export const { loadMoreFeed,setCurrentContent, upvotePost, downvotePost, hidePost, toggleReport, toggleSave} = FeedSlice.actions;
export const selectFeed = (state) => state.feed.feed;
export default FeedSlice.reducer;