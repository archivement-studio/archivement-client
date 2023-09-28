import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import AudioPlayerAtom from '../state/AudioPlayerAtom';

const AudioPlayerContext = createContext();

export const AudioPlayerProvider = ({ children }) => {
    // const [audio,setAudio] = useRecoilState(AudioPlayerAtom);
    // setAudio(new Audio("/assets/audios/re_plus.mp3"))
    const [audio] = useState(new Audio());
    const [playing, setPlaying] = useState(false);
    const [src, setSrc] = useState('');

    const play = () => {
        audio.play();
        setPlaying(true);
    };

    const init = () =>{
        // setAudio(new Audio());
        audio.pause();
        audio.currentTime = 0;
    }

    const pause = () => {
        audio.pause();
        setPlaying(false);
    };

    const setAudioSource = (newSrc) => {
        init()
        setSrc(newSrc);
        audio.src = newSrc;
        // if (playing) {
        //     play(); // restart playback with the new source if it was playing
        // }
    };

    const setLoop = (shouldLoop) => {
        audio.loop = shouldLoop;
        audio.preload = "none"
      };

    return (
    <AudioPlayerContext.Provider value={{ playing, play, pause, setAudioSource, src, setLoop }}>
        {children}
    </AudioPlayerContext.Provider>
    );
};

export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
  }
  return context;
};