import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSubredditDetails = createAsyncThunk(
    'subredditDetails/fetchSubredditDetails',
    async (subredditName)=>{
        const response = await fetch(`https://www.reddit.com/${subredditName}/about.json`);
        if(!response.ok){
            throw new Error('We couldn\'t fetch the data for this subreddit');
        }
        const data  = await response.json();
        const subredditDetails = data.data;
        console.log('Subreddit Details: ',subredditDetails);
        return subredditDetails;
    }
)

const initialState = {
    subredditInfo: null,
    status: 'idle',
    error: null,
}

const subredditDetailsSlice = createSlice({
    name: 'subredditDetails',
    initialState,
    reducers:{

    },
    extraReducers: (builder)=>{
        builder
            .addCase(fetchSubredditDetails.pending, (state) => {
            state.status = "loading";
            state.error = null;
          })
            .addCase(fetchSubredditDetails.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.subredditInfo = action.payload;
          })
            .addCase(fetchSubredditDetails.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
          });
    }
}
)

export default subredditDetailsSlice.reducer