import {configureStore} from '@reduxjs/toolkit';
import PostsSlice from './slices/PostsSlice';
import UiSlice from './slices/UiSlice';
import UsersSlice from './slices/UsersSlice';
import FeedSlice from './slices/FeedSlice';
import CommentsSlice from './slices/CommentsSlice';
import SubredditsSlice from './slices/SubredditsSlice';
import NotificationsSlice from './slices/NotificationsSlice';
import SearchSlice from 'Users/test/Desktop/Projects/RedditClone/reddit-clone/src/redux/slices/SearchSlice.js';


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
    },
});

export default store;