import { styled } from "styled-components";
import Header from "../components/Header";
import MainPageBody from "../components/MainPage/MainPageBody";

const StyleMainPage = styled.div`
    // background-image: url("/assets/videos/main-background.mp4");
    // background-image: url("/assets/images/main-page-background.png");
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
`

export default function MainPage(){
    return (
        <StyleMainPage>
            <Header/>
            <MainPageBody/>
        </StyleMainPage>

    )
}