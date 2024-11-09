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
                const shuffledPosts = [...action.payload];
                for (let i = shuffledPosts.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledPosts[i], shuffledPosts[j]] = [shuffledPosts[j], shuffledPosts[i]];
                };
                state.feed = shuffledPosts.map(post=>({
                    ...post,
                    userVote: 0,
                    isVisible: true,
                    isReported: false,
                    isSaved: savedPostIds.includes(post.id),
                }));
                state.currentContent = action.meta.arg;
            })
    },
    }
)

export const { setCurrentContent, upvotePost, downvotePost, hidePost, toggleReport, toggleSave} = FeedSlice.actions;
export const selectFeed = (state) => state.feed.feed;
export default FeedSlice.reducer;