import { styled } from "styled-components";
import Header from "../components/Header";
import PosterPageBody from "../components/PosterPage/PosterPageBody";
import HoverButton from "../components/HoverButton";
// import TestButton from "../test_component/TestButton";

import "../components/PosterPage/PosterPageResult.css"

const StylePosterPage = styled.div`
    // background: linear-gradient(180deg, rgba(168, 168, 168, 0.20) 12.26%, rgba(0, 0, 0, 0.00) 100%), #000;
    
    background-image: url("/assets/meta/poster-meta.png");


    content: "";
    // position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
`

const StylePosterHoverButton = styled.div`
margin-top: 73px;
`

export default function PosterPage(){
    return (
        <StylePosterPage id="poster">
            <Header/>
            <PosterPageBody/>
            <StylePosterHoverButton>
                <HoverButton button_label={"Next"}/>
            </StylePosterHoverButton>
        </StylePosterPage>
    );
}