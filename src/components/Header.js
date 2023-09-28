import { styled } from "styled-components"
import './Header.css'
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import SoundStateAtom from "../state/SoundStateAtom";
import GalleryPageImageAtom from "../state/GalleryPageImageAtom";
import { AudioPlayer, AudioPlayerProvider, useAudioPlayer } from "./AudioPlayer";
const archivementLogo = "/assets/images/archivement-logo.png";

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    color:#FFFFFF;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    height: 98px;

    background: rgba(0, 0, 0, 0.40);
    backdrop-filter: blur(6px);
    
    border-bottom: 1px solid;

    position: fixed;
    width: 100%;

    z-index: 5;
`

const StyleHeaderMenuLeftItem = styled.div`
    display: flex;
    margin: auto 0px;
    width: 300px;
`

const StyleHeaderMenuCenterItem = styled.div`
    display: flex;
    margin: auto 0px;
    width: 300px;
    cursor: none;
`


const StyleHeaderMenuRightItem = styled.div`
    display: flex;
    justify-content: right;
    margin: auto 0px;
    width: 300px;
`


const StyleHeaderLogo = styled.img`
    margin: 0px auto;
    width: 261px;
    height: 36.998px;
    flex-shrink: 0;
`

export default function Header(){
    const [soundState,setSoundState] = useRecoilState(SoundStateAtom);
    const [galleryImage, setGelleryImage] = useRecoilState(GalleryPageImageAtom);
    // const { playing, play, pause, setAudioSource, src, setLoop } = useAudioPlayer();
    // setLoop(true)

    // console.log(playing)


    function onCLickSoundNav(){
        let soundStateTemp = { ...soundState };
        soundStateTemp['sound_state'] = !soundStateTemp['sound_state'];
        if (!soundStateTemp['sound_state']){
            let a = document.getElementById('sound');
            console.log(a);
            // play()
            // play()
        }
        else{
            // pause()
        }
        setSoundState(soundStateTemp);
    }

    // if (galleryImage){
    //     console.log(galleryImage)
    //     try{
    //         setAudioSource(galleryImage['audio'])
    //     }
    //     catch(error){
    //         console.log(error)
    //     }
    // }
    

    return (
        <StyledHeader>
            {/* <button onClick={playing ? pause : play}>{playing ? 'Pause' : 'Play'}</button> */}
            {/* <audio src="/assets/audios/re_plus.mp3" autoPlay={true} loop={true}></audio> */}
            {/* <AudioPlayer src="/assets/audios/re_plus.mp3" playing={true}/> */}
            <StyleHeaderMenuLeftItem playing={true}>
                <div id="home"><Link className="link" to="/">HOME</Link></div>
                <div id="store"><Link className="link" to="/store">STORE</Link></div>
                {/* <div id="store"><a className="link" href="https://smartstore.naver.com/codecolony">STORE</a></div> */}
            </StyleHeaderMenuLeftItem>
            <StyleHeaderMenuCenterItem>
                <Link id="archivement-header-logo" to="/"><StyleHeaderLogo src={archivementLogo}/></Link>
            </StyleHeaderMenuCenterItem>
            <StyleHeaderMenuRightItem>
                <div id="about"><Link className="link" to="/about">ABOUT</Link></div>
                <div id="sound" onClick={onCLickSoundNav}>{soundState['sound_title'][[soundState['sound_state']]]}</div>
            </StyleHeaderMenuRightItem>
        </StyledHeader>
    )
}