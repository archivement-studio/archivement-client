import { keyframes, styled } from "styled-components";
import PosterPageNav from "./PosterPageNav";
import PosterPageUsername from "./PosterPageUsername";
import PosterPageLoading from "./PosterPageLoading";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import PosterPageAtom from "../../state/PosterPageAtom";
import HoverButton from "../HoverButton";
import ModalOverlay from "../ModalOverlay";
import { Navigate, useNavigate } from "react-router-dom";
import PosterPageLinebar from "./PosterPageLinebar";
import PosterPageResult from "./PosterPageResult";
import Button from "../Button";
import GalleryPageImageAtom from "../../state/GalleryPageImageAtom";

const StylePosterImage = styled.img`
    display: flex;
    margin: 0px auto;
    flex-shrink: 0;
    width: 970px;
    height: 545px;
    border-radius: 5px;

    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
`

const poster1Animation = keyframes`
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

const poster2Animation = keyframes`
    0%{
        left: 100%;
    }
    25%{
        left: 80%;
    }
    50%{
        left: 70%;
    }
    75%{
        left: 60%;
    }

    100%{
        left: 50%;
    }
`

const StylePosterUsernameDiv = styled.div`
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${poster1Animation} 0.7s linear alternate forwards;
`

const StylePoster1HoverButton = styled.div`
    margin-top: 80px;
    // margin-bottom: 33px;
`   

const StylePosterHoverButton = styled.div`
    margin-top: 40px;
    margin-bottom: 33px;
`   

const StylePosterLineBar = styled.div`
    display: block;
    cursor: pointer;
`

const PosterAnimationDiv = styled.div`
    opacity: 0;
    animation: ${poster1Animation} 0.7s linear alternate forwards;
`


// const StylePosterHoverButton = styled.div`
//     margin-top: 50px;
// `   

// const StylePosterLineBar = styled.div`
//     display: block;
//     cursor: pointer;
// `


const posterImage = "/assets/images/gallery/13.jpg";

export default function PosterPageBody(){
    const [posterState,setPosterState] = useRecoilState(PosterPageAtom);
    const [galleryImage, setGalleryImage] = useRecoilState(GalleryPageImageAtom);
    const navigate = useNavigate();

    if(!galleryImage){
        console.log("힝");
        console.log(galleryImage);
        navigate('/gallery');
    }

    function buttonClickEvent(){
        console.log("힝?")
        let posterStateTemp = { ...posterState };
        let step = posterStateTemp['step'];
        if(step !== 3){
            posterStateTemp['step'] = posterStateTemp['step'] + 1; 
        }

        setPosterState(posterStateTemp)
    }

    function movePosterLinebar(event){
    }

    const posterImageRef = useRef(null);

    useEffect(()=>{
        setPosterState({'step':0,'titles':["사이드바를 옮겨 포스터를 제작해보세요.","",""],"line_xpos":485})
    },[])

    let pageBody;
    if (posterState['step'] === -1){
        navigate("/gallery")
    }

    else if (posterState['step'] === 0) {
        pageBody = 
        <PosterAnimationDiv>
            <PosterPageNav/>
            <StylePosterLineBar>
                <PosterPageLinebar/>
            </StylePosterLineBar>
            { galleryImage ?
                (<StylePosterImage src={galleryImage['image']} ref={posterImageRef} id="poster-image"/>)
            : null
            }
            <StylePoster1HoverButton>
                <Button button_label={"NEXT"} onclick={buttonClickEvent}/>
                {/* <HoverButton button_label={"NEXT"} onclick={buttonClickEvent}/> */}
            </StylePoster1HoverButton>
        </PosterAnimationDiv>;
    } 
    else if (posterState['step'] === 1){
        pageBody= 
        <div>
            <PosterPageNav/>
            <StylePosterUsernameDiv>
                <PosterPageUsername/>
                <StylePosterHoverButton>
                    <Button button_label={"NEXT"} onclick={buttonClickEvent}/>
                    {/* <HoverButton button_label={"NEXT"} onclick={buttonClickEvent}/> */}
                </StylePosterHoverButton>
            </StylePosterUsernameDiv>
        </div>;
    }
    else if (posterState['step'] === 2) {
        pageBody= 
        <div>
            <PosterPageLoading/>
            <ModalOverlay show={true}/>
        </div>;
    }
    else{
        pageBody= 
        <div>
            <PosterPageResult/>
        </div>
    }

    async function onChange(){
        if (posterState['step'] === 2){
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve("완료!"), 3000)
            });
            await promise;

            let posterStateTemp = { ...posterState };
            posterStateTemp['step'] = posterStateTemp['step'] + 1; 

            setPosterState(posterStateTemp)
        }
    }
    

    return (
        <div onLoad={onChange}>
        {pageBody}
        </div>
    );
}