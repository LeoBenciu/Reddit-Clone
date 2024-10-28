import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSideBarOpen: false,
    isModalOpen: false,
    modalType: null,
    notification:{
        message: '',
        type: '',
        isVisble: false
    },
    theme: 'light',
    isLoading: false,
    currentPage: 'home',
};

const UiSlice = createSlice({
    name:'UiSlice',
    initialState,
    reducers:{
        toggleSideBar:(state)=>{
            state.isSideBarOpen = !state.isSideBarOpen;
        },
        openModal:(state,action)=>{
            state.isModalOpen = true;
            state.modalType = action.payload;
        },
        closeModal:(state)=>{
            state.isModalOpen = false;
            state.modalType = null;
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
        }
    }
})

export const {toggleSideBar, openModal, closeModal, setNotification, clearNotification, setTheme, toggleLoadingSpinner, setCurrentPage} = UiSlice.actions;
export default UiSlice.reducer;