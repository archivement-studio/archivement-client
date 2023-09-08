import { atom } from "recoil";

const SoundStateAtom = atom({
    key: 'SoundStateAtom', // unique ID (with respect to other atoms/selectors)
    default: {'sound_state':false,'sound_title':{false:'SOUND_OFF',true:'SOUND_ON'}}, // default value (aka initial value)
});

export default SoundStateAtom;