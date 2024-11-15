import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments: [],
    error: null,
    loading: false,
    userComment: '',
};

const CommentsSlice = createSlice({
    name:'CommentsSlice',
    initialState,
    reducers:{
        fetchComments: (state,action)=>{
            state.comments = action.payload;
            state.error = null;
            state.loading = false;
        },
        addComment: (state,action)=>{
            state.comments.unshift(action.payload);
        },
        deleteComment: (state,action)=>{
            state.comments = state.comments.filter(comment => comment.id !== action.payload);
        },
        toggleLikeComment: (state,action)=>{
            const comment = state.comments.find(comment=> comment.id === action.payload);
            if (comment) {
                comment.liked = !comment.liked;
            }
        },
        replyComment: (state,action)=>{
            const {commentId, reply} = action.payload;
            const comment = state.comments.find(comment=> comment.id === commentId);
            if (comment) {
                comment.replies = comment.replies ? [...comment.replies, reply] : [reply];
            }
        }
    }
})

export default CommentsSlice.reducer;