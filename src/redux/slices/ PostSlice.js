import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { loadCurrentPostDetails, saveCurrentPostDetails } from '../../utils/localStorage';


export const fetchComments = createAsyncThunk(
    'post/fetchComments',
    async ({subreddit, postId})=>{
        const response = await fetch(`https://www.reddit.com/${subreddit}/comments/${postId}.json?limit=30`);
        if(!response.ok){
            throw new Error('Failed to fetch comments');
        }
        const data = await response.json();
        const comments = data[1].data.children.map(comment=> comment.data);
        console.log('Comments:', comments);
        return comments;
    }
)

const initialState = {
    postDetails: loadCurrentPostDetails(),
    error: null,
    status: 'idle',
    comments: [],
}

const PostSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        savePostDetails: (state, action)=>{
            state.postDetails = action.payload;
            saveCurrentPostDetails(state.postDetails);
        },
        addAComment: (state,action)=>{
            state.comments.unshift(action.payload);
        }
    }, 
    extraReducers: (builder)=>{
        builder
            .addCase(fetchComments.pending, (state)=>{
                state.status = 'loading';
            })
            .addCase(fetchComments.rejected, (state,action)=>{
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchComments.fulfilled, (state,action)=>{
                state.status = 'fulfilled';
                state.comments = action.payload;
            })
    }
});

export const {savePostDetails, addAComment} = PostSlice.actions;
export default PostSlice.reducer;