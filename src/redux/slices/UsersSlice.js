import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    currentUser: null,
    selectedUser: null,
    isAuthenticated: false
};

const UsersSlice = createSlice({
    name:'UsersSlice',
    initialState,
    reducers:{
        registerUser: (state,action)=>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
            state.isAuthenticated = true;
        },
        setLoading: (state,action)=>{
            state.loading = action.payload;
        },
        setError: (state,action)=>{
            state.error = action.payload;
        },
        changePassword: (state,action)=>{
            if (state.currentUser){
                state.currentUser.password = action.payload;
            }
        },
        updateUserProfile: (state,action)=>{
            if (state.currentUser){
                state.currentUser = {...state.currentUser, ...action.payload};
            }
        },
        logoutUser: (state)=>{
            state.currentUser = null;
            state.isAuthenticated = false;
        }
    }
})

export const {registerUser, setLoading, setError, changePassword,updateUserProfile,logoutUser} = UsersSlice.actions;
export default UsersSlice.reducer;