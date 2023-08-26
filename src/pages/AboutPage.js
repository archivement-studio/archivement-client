import { styled } from "styled-components";
import Header from "../components/Header";
import AboutPageBody from "../components/AboutPage/AboutPageBody";
import Footer from "../components/Footer";
import "./AboutPage.css";

const StyleAboutPage = styled.div`
    background-color: #000000;
    content: "";
    // position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
`

export default function AboutPage(){
    return (
        <StyleAboutPage>
            <Header/>
            <AboutPageBody/>
            <Footer/>
        </StyleAboutPage>
    );
}