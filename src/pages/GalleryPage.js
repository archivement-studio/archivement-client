import { useRecoilState } from "recoil";
import GalleryPageCanvas from "../components/GalleyPage/GalleryPageCanvas";
import Header from "../components/Header";
import GalleryPageImageAtom from "../state/GalleryPageImageAtom";
import Footer from "../components/Footer";
import DetailPageDesc from "../components/DetailPage/DetailPageDesc";
import HoverButton from "../components/HoverButton";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useEffect } from "react";
import Button from "../components/Button";

const SytledGalleryCanvas = styled.div`
    position: relative;
    // position: fixed;
    // top: 80px
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
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

const StyledGalleryButton = styled.div`
    margin-bottom: 50px;
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
                <GalleryAudioSpectrum>
                    {/* <img src="/assets/meta/audio-spectrum.gif"/> */}
                    <GalleryAudioSpectrumImg src="/assets/gif/archivement_spectrum.gif"/>
                    {/* <img src="/assets/meta/audio-spectrum.gif"/> */}
                </GalleryAudioSpectrum>
                <GallerySrcollDownText>
                    <div>PLEASE SCROLL DOWN</div>
                    <StyleScrollDownImg src="/assets/icons/scroll_down.png"/>
                </GallerySrcollDownText>
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