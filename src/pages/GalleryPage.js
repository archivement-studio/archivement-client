import { useRecoilState } from "recoil";
import GalleryPageCanvas from "../components/GalleyPage/GalleryPageCanvas";
import Header from "../components/Header";
import GalleryPageImageAtom from "../state/GalleryPageImageAtom";
import Footer from "../components/Footer";
import DetailPageDesc from "../components/DetailPage/DetailPageDesc";
import HoverButton from "../components/HoverButton";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const SytledGalleryCanvas = styled.div`
    position: relative;
`
const GalleryAudioSpectrum = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
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

export default function GalleryPage(){
    const [galleryImage, setGelleryImage] = useRecoilState(GalleryPageImageAtom);
    const navigate = useNavigate();
    const onHandleClicks= () =>{
        navigate("/poster")
    }
    console.log(galleryImage);

    return (
        <div id="gallery">
            <Header/>
            <SytledGalleryCanvas>
            <GalleryPageCanvas/>
            { galleryImage
            ?
            <div>
                <GalleryAudioSpectrum>
                    <img src="/assets/meta/audio-spectrum.gif"/>
                </GalleryAudioSpectrum>
                <GallerySrcollDownText>
                    <h1>PLEASE SCROLL DOWN</h1>
                </GallerySrcollDownText>
            </div>
            : null
            }
            </SytledGalleryCanvas>
            { galleryImage
            ?
            <div>
            <DetailPageDesc/>
            <HoverButton button_label={"SELECT"} handleclick={onHandleClicks}/>
            <Footer/>
            </div>
            :
            null
            }
        </div>
    );
}