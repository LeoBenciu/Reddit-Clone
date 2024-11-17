import { createSlice } from "@reduxjs/toolkit";
import { loadRecentSearch, saveRecentSearch } from "../../utils/localStorage";

const initialState = {
    recentSearch: loadRecentSearch(),
};

const recentSearchSlice = createSlice({
    name: 'recentSubreddits',
    initialState,
    reducers:{
        addSearch: (state,action)=>{
            state.recentSearch = state.recentSearch.filter(rc=> rc !== action.payload);
            state.recentSearch.unshift(action.payload)
            if (state.recentSearch.length > 5){
                state.recentSearch.pop();
            };
            saveRecentSearch(state.recentSearch);
        },
        removeSearch: (state,action)=>{
            state.recentSearch = state.recentSearch.filter(rc=> rc!== action.payload);
        }
    },
})

export const {addSearch, removeSearch} = recentSearchSlice.actions;
export default recentSearchSlice.reducer;