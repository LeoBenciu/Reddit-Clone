import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './containers/Layout/Layout';
import HomePage from './pages/HomePage';
import SubredditPage from './pages/SubredditPage';
import SavedPostsPage from './pages/SavedPostsPage';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TopicPage from './pages/TopicPage';
import PostPage from './pages/PostPage/PostPage';
import CreateAPostPage from './pages/CreateAPostPage/CreateAPostPage';

function App() {
  const isDarkMode = useSelector(state => state.ui.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='r/:subredditName' element={<SubredditPage/>}/>
        <Route path='/comments/:postId' element={<PostPage/>}/>
        <Route path='Saved-Posts' element={<SavedPostsPage/>}/>
        <Route path='t/:topicName' element={<TopicPage/>}/>
        <Route path='search/:query' element={<TopicPage search={true}/>}/>
        <Route path='r/:subredditName/create-a-post' element={<CreateAPostPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
