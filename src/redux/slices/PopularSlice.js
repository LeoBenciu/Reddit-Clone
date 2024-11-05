import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPopularCarousel = createAsyncThunk(
    'popular/fetchPopular',
    async () =>{
        const response = await fetch('https://www.reddit.com/r/popular/hot.json?limit=12');
        const data = await response.json();
        const posts = data.data.children.map((post)=>post.data);
        console.log('Transformed Posts:', posts);
        return posts;
    }
)

const initialState = {
    posts: [],
    status: 'idle',
    error: null,
}

const PopularSlice = createSlice({
    name: 'popular',
    initialState,
    reducers: {},
    extraReducers:(builder)=> {
        builder
            .addCase(fetchPopularCarousel.pending,(state)=>{
                state.status = 'loading';
            })
            .addCase(fetchPopularCarousel.rejected,(state,action)=>{
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchPopularCarousel.fulfilled,(state,action)=>{
                state.status = 'fulfilled';
                state.posts = action.payload;
            })
    }
})


export default PopularSlice.reducer;