import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadSavedPostIds, saveSavedPostIds } from "../../utils/localStorage";

const savedPostIds = loadSavedPostIds();

export const fetchSearchResults = createAsyncThunk(
    'search/fetchSearch',
    async (query) => {
        const response = await fetch(`https://www.reddit.com/search.json?q=${query}&sort=new&limit=30`);
        if(!response.ok){
            throw new Error('failed to fetch search results');
        };
        const data = await response.json();
        const posts = data.data.children.map((post)=> post.data);
        console.log('fetched searchResults: ', posts);
        return posts;
    }
)

const initialState = {
    query: '',
    results: [],
    searchType: 'posts',
    status: 'idle',
    error: null
};

const SearchSlice = createSlice({
    name:'SearchSlice',
    initialState,
    reducers:{
        setSearchQuery: (state,action)=>{
            state.query = action.payload;
            state.status = 'idle';
        },
        clearSearchResults:(state)=>{
            state.results = [];
            state.query = '';
            state.error = null;
            state.loading = false;
        },
        setSearchType:(state,action)=>{
            state.searchType = action.payload;
        }, 
        upvotePost: (state, action) => {
            const post = state.results.find(p => p.id === action.payload);
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
            const post = state.results.find(p => p.id === action.payload);
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
            const post = state.results.find(p=>p.id === action.payload);
            if(post){
                post.isVisible = false;
            }
        },
        toggleSave: (state,action)=>{
            const post = state.results.find(p=>p.id === action.payload);
            if(post){
                post.isSaved = !post.isSaved;
                const currentSavedPostIds = state.results
                    .filter(p=> p.isSaved)
                    .map(p=> p.id);
                saveSavedPostIds(currentSavedPostIds);
            }
        },
        toggleReport: (state,action)=>{
            const post = state.results.find(p=>p.id === action.payload);
            if(post){
                post.isReported = !post.isReported;
            }
        },
    },
    extraReducers: (builder)=>{
        builder
            .addCase(fetchSearchResults.pending,(state)=>{
                state.status = 'loading';
            })
            .addCase(fetchSearchResults.rejected,(state,action)=>{
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchSearchResults.fulfilled,(state,action)=>{
                state.status = 'fulfilled';
                state.results = action.payload.map(post=>({
                    ...post,
                    userVote: 0,
                    isVisible: true,
                    isReported: false,
                    isSaved: savedPostIds.includes(post.id),
                }));
            })
    }
});

export const {setSearchQuery, setSearchType, clearSearchResults, upvotePost,downvotePost, hidePost, toggleSave, toggleReport} = SearchSlice.actions;
export default SearchSlice.reducer;
