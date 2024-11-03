import {configureStore} from '@reduxjs/toolkit';
import PostsSlice from './slices/PostsSlice';
import UiSlice from './slices/UiSlice';
import UsersSlice from './slices/UsersSlice';
import FeedSlice from './slices/FeedSlice';
import CommentsSlice from './slices/CommentsSlice';
import SubredditsSlice from './slices/SubredditsSlice';
import NotificationsSlice from './slices/NotificationsSlice';
import SearchSlice from './slices/SearchSlice2';
import PopularSlice from './slices/PopularSlice';


const store = configureStore({
    reducer: {
        posts: PostsSlice,
        ui: UiSlice,
        user: UsersSlice,
        comments: CommentsSlice,
        subreddits: SubredditsSlice,
        feed: FeedSlice,
        notifications: NotificationsSlice,
        search: SearchSlice,
        popular: PopularSlice,
    },
});

export default store;