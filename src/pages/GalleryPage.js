import { useRecoilState } from "recoil";
import GalleryPageCanvas from "../components/GalleyPage/GalleryPageCanvas";
import Header from "../components/Header";
import GalleryPageImageAtom from "../state/GalleryPageImageAtom";
import Footer from "../components/Footer";
import DetailPageDesc from "../components/DetailPage/DetailPageDesc";
import HoverButton from "../components/HoverButton";
import { useNavigate } from "react-router-dom";
import { keyframes, styled } from "styled-components";
import { useEffect } from "react";
import Button from "../components/Button";

const move = keyframes`
	0%{
    	top: 93%;
    }
    
    25%{
    	top: 94%;
    }
    
    50%{
    	top: 93%;
    }
    
    75%{
    	top: 94%;
    }

    100%{
        top: 94%;
    }
`;

const galleryTitleAnimation = keyframes`
	0%{
        opacity: 0.5;
    }
    25%{
        opacity: 1;
    }
    50%{
        opacity: 0.8;
    }
    75%{
        opacity: 0.0;
    }
    
    100%{
        opacity: 0.0;
    }
`;

const galleryCanvasAnimation = keyframes`
	0%{
        filter: blur(7px);
    }
    
    25%{
        filter: blur(5px);
    }
    
    50%{
        filter: blur(3px);
    }
    
    75%{
        filter: blur(1px);
    }

    100%{
        filter: none;
    }
`;

const galleryCloseAnimation = keyframes`
    0%{
        opacity: 0;
    }
    25%{
        opacity: 0.25;
    }
    50%{
        opacity: 0.5;
    }
    75%{
        opacity: 0.75;
    }

    100%{
        opacity: 1;
    }
`

const SytledGalleryCanvas = styled.div`
    position: relative;
    // position: fixed;
    // top: 80px;

    animation: ${galleryCanvasAnimation} 4s linear alternate forwards;
`
const GalleryAudioSpectrum = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
`
const GalleryAudioSpectrumImg = styled.img`
    width: 80px;
    height: 150px;

    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
`

const GalleryCloseButton = styled.div`
    opacity: 0;
    position: absolute;
    top: 180px;
    left: 92%;
    animation: ${galleryCloseAnimation} 2s 1s linear alternate forwards;
    width:0px;
`

const GalleryCloseImg = styled.img`
    width: 35px;
    // -webkit-user-drag: none;
    // -khtml-user-drag: none;
    // -moz-user-drag: none;
    // -o-user-drag: none;
    // user-drag: none;

    z-index: 999;
    pointer-events: none; 
`

const GalleryAudioSpectrumImg = styled.img`
    width: 80px;
    height: 150px;
`

const GallerySrcollDownText = styled.div`
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate( -50%, -50% );

    color: #FFF;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
const GallerySrcollDownImgDiv = styled.div`
    position: absolute;
    top: 93%;
    left: 50%;
    transform: translate( -50%, -50% );
    // animation-name: move
    // animation-duration: 3s;
    // animation-delay: 1s;
    // animation-direction: alternate;
    animation: ${move} 3s 1s linear alternate forwards;
`

const StyledGalleryButton = styled.div`
    margin-bottom: 80px;
`

const StyleScrollDownImg = styled.img`
    width: 23px;
    // margin-top: 17px;
`


const StyleGalleryTitle = styled.div`
    position: fixed;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, 50%);
    top: 50%;
    color: #FFF;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.192px;

    font-weight: 600;
    z-index: 5;

    animation: ${galleryTitleAnimation} 3.5s 0.5s linear alternate forwards;
`

const StyleGalleryCanvasDiv = styled.div`
    // top: 50px;
    position: relative;
    // margin-top: 50px;
    // overflow: hidden;
    // height: 100%;
`

const StyleScrollDownImg = styled.img`
    width: 23px;
    margin-top: 17px;
`

const StyleGalleryTitle = styled.div`
    position: fixed;
    left: 50%;
    transform: translate(-50%, 50%);
    top: 10%;
    color: #FFF;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.192px;
`

const StyleGalleryCanvasDiv = styled.div`
    // top: 50px;
    position: relative;
    // margin-top: 50px;
    // overflow: hidden;
    // height: 100%;
`

export default function GalleryPage(){
    const [galleryImage, setGelleryImage] = useRecoilState(GalleryPageImageAtom);
    const navigate = useNavigate();
    const onHandleClicks= () =>{
        navigate("/poster")
    }

    useEffect(() => {
        setGelleryImage(null);
      },[])
  
    const handleClose = () =>{
        setGelleryImage(null);
    }
    return (
        <div id="gallery">
            <Header/>
            <StyleGalleryTitle>
                갤러리에서 이미지를 선택해주세요.
            </StyleGalleryTitle>
            <SytledGalleryCanvas>
            <StyleGalleryCanvasDiv>
                <GalleryPageCanvas/>
            </StyleGalleryCanvasDiv>
            { galleryImage
            ?
            <div>
                <GalleryCloseButton>
                    <GalleryCloseImg src="/assets/icons/close.svg"
                    />
                </GalleryCloseButton>
                <GalleryAudioSpectrum>
                    <GalleryAudioSpectrumImg src="/assets/gif/archivement_spectrum.gif"/>
                    {/* <img src="/assets/gif/archivement_spectrum.gif"/> */}
                    {/* <img src="/assets/meta/audio-spectrum.gif"/> */}
                </GalleryAudioSpectrum>
                <GallerySrcollDownText>
                    <div>PLEASE SCROLL DOWN</div>
                    <StyleScrollDownImg src="/assets/icons/scroll_down.png"/>
                </GallerySrcollDownText>
                <GallerySrcollDownImgDiv>
                    <StyleScrollDownImg src="/assets/icons/scroll_down.svg"/>
                </GallerySrcollDownImgDiv>
            </div>
            : null
            }
            </SytledGalleryCanvas>
            { galleryImage
            ?
            <div>
            <DetailPageDesc/>
            <StyledGalleryButton>
                <Button button_label={"SELECT"} to={"/poster"}/>
                {/* <HoverButton button_label={"SELECT"} handleclick={onHandleClicks}/> */}
            </StyledGalleryButton>
            <Footer/>
            </div>
            :
            null
            }
        </div>
    );
}