import { Reset } from 'styled-reset';
import logo from './logo.svg';
import MainPage from './pages/MainPage';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StorePage from './pages/StorePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import DetailPage from './pages/DetailPage';
import PosterPage from './pages/PosterPage';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/store" element={<StorePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/gallery" element={<GalleryPage/>}/>
      <Route path="/detail" element={<DetailPage/>}/>
      <Route path="/poster" element={<PosterPage/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
