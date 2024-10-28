import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notifications: [],
    loading: false,
    error: null
};

const NotificationsSlice = createSlice({
    name:'NotificationsSlice',
    initialState,
    reducers:{
        fetchNotification: (state,action)=>{
            state.notifications = action.payload;
            state.loading = false;
            state.error = null;
        },
        setLoading: (state,action)=>{
            state.loading = action.payload;
        },
        setError: (state,action)=>{
            state.error = action.payload;
        },
        addNotification: (state,action)=>{
            state.notifications.push(action.payload);
        },
        markAsRead: (state,action)=>{
            const notification = state.notifications.find(notification=> notification.id === action.payload);
            if (notification){
                notification.read = true;
            }
        },
        markAllAsRead: (state)=>{
            state.notifications.forEach(notification=> notification.read=true);
        },
        deleteNotification: (state,action)=>{
                state.notifications.filter(notification=> notification.id !== action.payload)
        },
        deleteAllNotifications: (state)=>{
            state.notifications = [];
        }
        
        
    }
})

export const {fetchNotification, markAsRead, markAllAsRead, addNotification, deleteNotification, deleteAllNotifications,setError, setLoading} = NotificationsSlice.actions;
export default NotificationsSlice.reducer;