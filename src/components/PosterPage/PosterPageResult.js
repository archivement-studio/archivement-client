import { styled } from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import PosterPageDesc from "./PosterPageDesc";
import Footer from "../Footer";
import HoverButton from "../HoverButton";
import PosterPageResultDesc from "./PosterPageResultDesc";
import Button from "../Button";

import "./PosterPageResult.css"
import ModalOverlay from "../ModalOverlay";
import DownloadOverlay from "../DownloadOverlay";


const StyledPosterOutterDiv = styled.div`
    opacity: 0.5;
    // position: absolute;
`

const StyledPosterOutterImg = styled.img`
    width: 100%;
    // height: 100%;
    height: 1080px;
    opacity: 0.5;
`
const SytledPosterInnerDiv = styled.div`
    top: 150px;
    left: 50%;
    transform: translate(-50%, 50%);
    position: absolute;
    display: flex;
`

const SytledPosterInnerTitle = styled.div`
    color: #FFF;
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 42px */
    letter-spacing: -0.168px;
`

const SytledPosterInnerImgDiv = styled.div`
    top: -5px;
    left: 50%;
    transform: translate(-50%, 50%);
    position: absolute;
    display: flex;
`
const StyledPosterInnerImg = styled.img`
    width: 554px;
    margin: 0px auto;
    border-radius: 7px;
`

const StyleArchivementMiniLogo = styled.img`
    display: flex;
    margin: 0px auto;
    flex-shrink: 0;
    width: 351px;
    // position: relative;
    top: 500px;
    margin-top: 70px;
`

const StyleArchivementSubTitle = styled.div`
    text-align: center;
    top: 550px;
    // position: relative;

    color: #FFF;
    text-align: center;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 36px */
    letter-spacing: -0.144px;

    margin-top: 50px;
`

const StyleDownloadButton = styled.div`
    transform: translate(-50%, 50%);
    position: absolute;
    display: flex;
    left: 50%;
    top: 850px;
`   
const StyleHomeButton = styled.div`
    margin-bottom: 124px;
    margin-top: 310px;
`   
const StyleHeartbutton = styled.div`
    margin-top: 40px;
`

const archivementLogo = "/assets/images/archivement-logo.svg";

export default function PosterPageResult(){
    let [downloadImage, setDownloadImage] = useState(false);
    const onHandleDownload = ()=>{
        setDownloadImage(true);
        console.log(downloadImage);
    }

    useEffect(() => {
        AOS.init({
            once: false
        });
    })
    console.log(resultPosterState);
      
    return (
        <div>
        { 
            resultPosterState
            ?
            <div>
            <DownloadOverlay show={downloadImage}>
            <StyledPosterOutterDiv>
                <StyledPosterOutterImg src={resultPosterState['image_url']} data-aos="zoom-in" data-aos-delay="550"/>
            </StyledPosterOutterDiv>
            <SytledPosterInnerDiv>
                <div data-aos="zoom-out" data-aos-duration="500">
                    <SytledPosterInnerTitle>포스터가 완성되었습니다.</SytledPosterInnerTitle>
                </div>
            </SytledPosterInnerDiv>
            <SytledPosterInnerImgDiv>
                <StyledPosterInnerImg src={resultPosterState['image_url']} data-aos="flip-up" data-aos-delay="650"/>
            </SytledPosterInnerImgDiv>
            { downloadImage ?
            <div>
                <SytledPosterInnerImgDiv id="download-img-div">
                    <StyledPosterInnerImg src="/assets/meta/qr_image.png"/>
                </SytledPosterInnerImgDiv>
                <div id="download-title">
                    QR코드를 카메라로 인식하여
                    사진을 다운로드하세요. 
                </div>
            </div>
            : null
            }
            <StyleDownloadButton>
                <Button button_label={"Download"} onclick={onHandleDownload}/>
                {/* <HoverButton button_label={"Download"}/> */}
            </StyleDownloadButton>
            <PosterPageDesc resultPosterState={resultPosterState}/>
            <div id="scenescape-desc">
                <PosterPageResultDesc
                    left_sentence={"SceneScape(씬스케이프)는 아카이브먼트의 방식으로 표현하는 자동 포스터 변환 프로그램입니다. 현 사이트에서 베타버전을 체험해보실 수 있습니다. 앞으로의 SceneScape는 직접 사진을 업로드하여 개개인의 추억이 담긴 포스터를 제작할 수 있도록 설계될 예정입니다.  다음 버전에 관심이 있다면 아래 하트를 눌러주세요."}
                    right_sentence={"SceneScape is an automated poster conversion program that presents in an archival manner. It's currently in beta on our site. Future versions of SceneScape will be designed to allow you to upload your own photos to create a poster of your personal memories.  If you're interested in the next version, hit the heart below."}
                />
                <StyleHeartbutton>
                    <Button button_image={"/assets/icons/heart.svg"} id={"heart-button"}/>
                    {/* <HoverButton button_label={"Home"}/> */}
                </StyleHeartbutton>
            </div>
            
            <StyleArchivementMiniLogo src={archivementLogo}/>
            {/* <StyleArchivementSubTitle>
                <h1>아카이브먼트는 빠르게 스쳐갔던 사람들의 추억들을</h1>
                <h1>아카이브먼트의 방식으로 재해석하여 보관해드리는 포스터 브랜드입니다.</h1>
                <p></p>
                <h1>홈페이지에서 ~</h1>
            </StyleArchivementSubTitle> */}
            <h1 id="poster-about-title">ABOUT</h1>
            <PosterPageResultDesc
                left_sentence={"Archivement(아카이브먼트)는 갤러리 속 쌓여간 사진들에 담긴 추억들을 다시 꺼내 ‘스쳐간 순간'들 그 자체로 기록하는 포스터 아카이브 브랜드입니다. 사람들이 촬영한 사진을 기반으로 다채로운 색채를 자극하는 포스터로 사진에 깃들어있는 이야기들과 기억이 함께 공존하는 방법을 제안합니다."}
                right_sentence={"Archivement is a poster archive brand that brings out the memories in the photos that have been piling up in your gallery, documenting the 'fleeting moments' themselves. Based on photos taken by people, the colorful and stimulating posters suggest how stories and memories can coexist together."}
            />
            <StyleHomeButton>
                <Button button_label={"Home"} to={"/"}/>
                {/* <HoverButton button_label={"Home"}/> */}
            </StyleHomeButton>
            <Footer/>
            </DownloadOverlay>
        </div>
        : null
        </div>
    );
}