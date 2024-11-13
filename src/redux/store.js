import {configureStore} from '@reduxjs/toolkit';
import UiSlice from './slices/UiSlice';
import UsersSlice from './slices/UsersSlice';
import FeedSlice from './slices/FeedSlice';
import CommentsSlice from './slices/CommentsSlice';
import SubredditsSlice from './slices/SubredditsSlice';
import NotificationsSlice from './slices/NotificationsSlice';
import SearchSlice from './slices/SearchSlice2';
import PopularSlice from './slices/PopularSlice';
import SubredditDetailsSlice from './slices/SubredditDetailsSlice';
import recentSubredditsSlice from './slices/recentSubredditsSlice';
import PostSlice from './slices/ PostSlice';

const store = configureStore({
    reducer: {
        ui: UiSlice,
        user: UsersSlice,
        comments: CommentsSlice,
        subreddits: SubredditsSlice,
        subredditDetails: SubredditDetailsSlice,
        feed: FeedSlice,
        notifications: NotificationsSlice,
        search: SearchSlice,
        popular: PopularSlice,
        recentSubreddits: recentSubredditsSlice,
        post: PostSlice,
    },
});

export default store;