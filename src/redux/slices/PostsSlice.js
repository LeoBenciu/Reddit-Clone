import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    loading: false,
    error: null, 
    selectedPost: null
};

const PostsSlice = createSlice({
    name: 'PostsSlice',
    initialState,
    reducers: {
        fetchPostsStart: (state)=> {
            state.loading = true;
            state.error = null;
        },
        fetchPostsSuccess: (state, action)=>{
            state.loading = false;
            state.posts = action.payload;
        },
        fetchPostsFailure: (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        },
        selectPost: (state,action)=>{
            state.selectedPost = action.payload;
        },
        clearSelectedPost: (state)=>{
            state.selectedPost = null;
        },
        voteOnPost: (state,action)=>{
            const { postId, voteType } = action.payload;
            const post = state.posts.find((post) => post.id === postId);
            if (post) {
                post.voteCount += voteType === 'upvote' ? 1 : -1;
            }
        },
        addPost: (state,action)=>{
            state.posts.unshift(action.payload);
        },
        editPost: (state,action) =>{
            const index = state.posts.findIndex((post) => post.id === action.payload.id);
            if (index !== -1) {
                state.posts[index] = { ...state.posts[index], ...action.payload };
            } 
        },
        deletePost: (state,action)=>{
            state.posts = state.posts.filter(post=> post.id !== action.payload);
        }
    }
})

export const {fetchPostsFailure, fetchPostsSuccess, fetchPostsStart, addPost, deletePost, editPost, voteOnPost, selectPost, clearSelectedPost} = PostsSlice.actions;
export default PostsSlice.reducer;