import { Reset } from 'styled-reset';
import logo from './logo.svg';
import MainPage from './pages/MainPage';
import './App.css';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import StorePage from './pages/StorePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import DetailPage from './pages/DetailPage';
import PosterPage from './pages/PosterPage';
import React from 'react';
import { AudioPlayerProvider } from './components/AudioPlayer';
// import curDot from 'cursor-dot'

// const cursor = curDot({
//   easing: 5,
//   background: '#f1f1f1',
//   diameter: 30,
//   borderColor: 'transparent',
// });

// cursor.over('#poster-image', {
//   background: 'black',
//   easing: 5,
//   borderColor: 'transparent',
// })

// cursor.over('span.selector', {
//   borderColor: 'rgba(255,255,255,.38)',
//   broderWidth: 2
// })

// cursor.over("#sound", {
//   background: "#042003"
// });

// cursor.over(".react1", {
//   borderColor: "rgba(255,255,255,.38)"
// });

// cursor.over(".react2", {
//   scale: 0.5,
//   background: "#fff"
// });

function App() {
  return (
    <React.Fragment>
      <Reset/>
      <AudioPlayerProvider>
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
      </AudioPlayerProvider>
    </React.Fragment>
    
  );
}

export default App;
