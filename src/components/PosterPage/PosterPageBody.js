import { styled } from "styled-components";
import PosterPageNav from "./PosterPageNav";
import PosterPageUsername from "./PosterPageUsername";
import PosterPageLoading from "./PosterPageLoading";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import PosterPageAtom from "../../state/PosterPageAtom";
import HoverButton from "../HoverButton";
import ModalOverlay from "../ModalOverlay";
import { Navigate } from "react-router-dom";
import PosterPageLinebar from "./PosterPageLinebar";

const StylePosterImage = styled.img`
    display: flex;
    margin: 0px auto;
    flex-shrink: 0;
    width: 970px;
    height: 545px;
`

const StylePosterUsernameDiv = styled.div`
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const StylePosterHoverButton = styled.div`
    margin-top: 73px;
`   

const StylePosterLineBar = styled.div`
    display: block;
    cursor: pointer;
`


const posterImage = "/assets/meta/about-meta.png";

export default function PosterPageBody(){
    const [posterState,setPosterState] = useRecoilState(PosterPageAtom);

    function buttonClickEvent(){
        let posterStateTemp = { ...posterState };
        let step = posterStateTemp['step'];
        if(step !== 3){
            posterStateTemp['step'] = posterStateTemp['step'] + 1; 
        }

        setPosterState(posterStateTemp)
    }

    function movePosterLinebar(event){
        console.log("ㅋㅋㅋㅋㅋㅋ",event);
        console.log(event.pageX, event.pageY);
    }

    const posterImageRef = useRef(null);

    useEffect(()=>{
        setPosterState({'step':0,'titles':["사이드바를 옮겨 포스터를 제작해보세요.","",""],"line_xpos":485})
    },[])

    let pageBody;
    if (posterState['step'] === 0) {
        pageBody = 
        <div>
            <PosterPageNav/>
            <StylePosterLineBar>
                <PosterPageLinebar/>
            </StylePosterLineBar>
            <StylePosterImage src={posterImage} ref={posterImageRef} id="poster-image"/>
            <StylePosterHoverButton>
                <HoverButton button_label={"Next"} onclick={buttonClickEvent}/>
            </StylePosterHoverButton>
        </div>;
    } 
    else if (posterState['step'] === 1){
        pageBody= 
        <div>
            <PosterPageNav/>
            <StylePosterUsernameDiv>
                <PosterPageUsername/>
                <StylePosterHoverButton>
                    <HoverButton button_label={"Next"} onclick={buttonClickEvent}/>
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
        pageBody= <div><h1>Hello Result</h1></div>
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