import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    query: '',
    results: [],
    searchType: 'posts',
    loadingMore: false,
    loading: false,
    error: null
};

const SearchSlice = createSlice({
    name:'SearchSlice',
    initialState,
    reducers:{
        setSearchQuery: (state,action)=>{
            state.query = action.payload;
        },
        fetchSearchResults:(state,action)=>{
            state.results = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchMoreSearchResults:(state,action)=>{
            state.results = [...state.results, ...action.payload];
            state.loadingMore = false;
            state.error = null;
        },
        clearSearchResults:(state)=>{
            state.results = [];
            state.query = '';
            state.error = null;
            state.loading = false;
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
        setSearchType:(state,action)=>{
            state.searchType = action.payload;
        }
    }
})

export const {setSearchQuery, setSearchType, fetchSearchResults, fetchMoreSearchResults, clearSearchResults, setLoading, setLoadingMore, setError} = SearchSlice.actions;
export default SearchSlice.reducer;