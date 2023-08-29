import { atom } from "recoil";

const PosterPageAtom = atom({
    key: 'PosterPageAtom', // unique ID (with respect to other atoms/selectors)
    default: {'step':0,'titles':["사이드바를 옮겨 포스터를 제작해보세요.","",""]}, // default value (aka initial value)
});

export default PosterPageAtom;