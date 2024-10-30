import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSideBarOpen: false,
    isSecondaryOpen: false,
    modalType: null,
    notification:{
        message: '',
        type: '',
        isVisble: false
    },
    theme: 'light',
    isLoading: false,
    currentPage: 'home',
    popups: {
        loginPopup: false,
        getAppPopup: false,
    },
};

const UiSlice = createSlice({
    name:'UiSlice',
    initialState,
    reducers:{
        toggleSideBar:(state)=>{
            state.isSideBarOpen = !state.isSideBarOpen;
        },
        toggleSecondary: (state)=>{
            state.isSecondaryOpen = !state.isSecondaryOpen;
        },
        setNotification:(state,action)=>{
            const { mess, tip} = action.payload;
            state.notification.isVisble = true;
            state.notification.message = mess;
            state.notification.type = tip;
        },
        clearNotification:(state)=>{
            state.notification.isVisble= false;
            state.notification.message= '';
            state.notification.type= '';
        },
        setTheme:(state,action)=>{
            state.theme = action.payload;
        },
        toggleLoadingSpinner:(state,action)=>{
            state.isLoading = action.payload;
        },
        setCurrentPage:(state,action)=>{
            state.currentPage = action.payload;
        },
        openPopup: (state,action)=>{
            const popId = action.payload;
            state.popups[popId] = true;
        },
        closePopup: (state,action)=>{
            const popId = action.payload;
            state.popups[popId] = false;
        }
    }
})

export const {toggleSideBar, openPopup, closePopup, setNotification, clearNotification, setTheme, toggleLoadingSpinner, setCurrentPage, toggleSecondary} = UiSlice.actions;
export default UiSlice.reducer;