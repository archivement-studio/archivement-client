import { styled } from "styled-components";
import Header from "../components/Header";
import MainPageBody from "../components/MainPage/MainPageBody";

const StyleMainPage = styled.div`
    background-image: url("/assets/images/main-page-background.png");
    height: 1080px;
`

export default function MainPage(){
    return (
        <StyleMainPage>
            <Header/>
            <MainPageBody/>
        </StyleMainPage>
    )
}