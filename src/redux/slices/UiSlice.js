import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSideBarOpen: false,
    isSecondaryOpen: false,
    modalType: null,
    notification:{
        message: '',
        type: '',
        isVisible: false
    },
    isDarkMode: true,
    isLoading: false,
    currentPage: 'home',
    popups: {},
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
        setDarkMode:(state)=>{
            state.isDarkMode = !state.isDarkMode;
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
        },
        togglePopup: (state,action)=>{
            const popId = action.payload;
            state.popups[popId] = !state.popups[popId];
        },
    }
})

export const {toggleSideBar, openPopup, closePopup, setNotification, clearNotification, setDarkMode, toggleLoadingSpinner, setCurrentPage, toggleSecondary, togglePopup} = UiSlice.actions;
export default UiSlice.reducer;