import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
    loading: false,
    loadingMore: false,
    error: null,
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
            state.error = action.payload;
        },
        likePostInFeed:(state,action)=>{
            const post = state.feed.find(post=> post.id === action.payload);
            if (post){
                post.isLiked= true;
            }
        },
        setCurrentContent: (state, action) => {
            state.currentContent = action.payload;
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
                state.feed = shuffledPosts;
                state.currentContent = action.meta.arg;
            })
    },
    }
)

export const { fetchFeed, fetchMoreFeed, setLoading, setLoadingMore, setError, likePostInFeed, refreshFeed, setCurrentContent} = FeedSlice.actions;
export const selectFeed = (state) => state.feed.feed;
export const selectLoading = (state) => state.feed.loading;
export const selectCurrentContent = (state)=> state.feed.currentContent;
export default FeedSlice.reducer;