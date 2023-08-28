import { atom } from "recoil";

const GalleryPageImageAtom = atom({
    key: 'GalleryPageImageAtom', // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
});

export default GalleryPageImageAtom;