import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './containers/Layout/Layout';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import InternetCulturePage from './pages/InternetCulturePage';
import MoviesAndTvPage from './pages/MoviesAndTvPage';
import PopCulturePage from './pages/PopCulturePage';
import QAndAsPage from './pages/QAndAsPage';
import TechnologyPage from './pages/TechnologyPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='Internet-Culture' element={<InternetCulturePage/>}/>
        <Route path='Games' element={<GamesPage/>}/>
        <Route path='Q&As' element={<QAndAsPage/>}/>
        <Route path='Technology' element={<TechnologyPage/>}/>
        <Route path='Pop-Culture' element={<PopCulturePage/>}/>
        <Route path='Movies&TV' element={<MoviesAndTvPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
