import { createSlice } from "@reduxjs/toolkit";
import { loadRecentSubreddits, saveRecentSubreddits } from "../../utils/localStorage";

const initialState = {
    recent: loadRecentSubreddits(),
};

const recentSubredditsSlice = createSlice({
    name: 'recentSubreddits',
    initialState,
    reducers:{
        addSubreddit: (state,action)=>{
            const {name, iconURL} = action.payload;
            state.recent = state.recent.filter(rc=> rc.name !== name);
            state.recent.unshift({name, iconURL})
            if (state.recent.length > 5){
                state.recent.pop();
            };
            saveRecentSubreddits(state.recent);
        },
    },
})

export const {addSubreddit} = recentSubredditsSlice.actions;
export default recentSubredditsSlice.reducer;