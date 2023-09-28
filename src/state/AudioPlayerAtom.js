import { atom } from "recoil";

const AudioPlayerAtom = atom({
    key: 'AudioPlayerAtom', // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
});

export default AudioPlayerAtom;