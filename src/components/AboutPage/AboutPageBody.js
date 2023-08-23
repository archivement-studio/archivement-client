import { styled } from "styled-components";
import './AboutPageBody.css'

const StyledAboutPageBody = styled.div`
    // display: flex;
    margin-top: 140px;
`
const StyleAboutImage = styled.img`
    display: flex;
    margin: 0px auto;
    flex-shrink: 0;
    width: 1200px;
    height: 670px;
`

const StyledAboutPageBodyIntro = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Pretendard;
`

const StyleArchivementLogo = styled.img`
    display: flex;
    margin: 0px auto;
    flex-shrink: 0;
    width: 1200px;
    margin-bottom: 208px;
`

const archivementLogo = "/assets/images/archivement-logo.svg";

const aboutImage = "/assets/meta/about-meta.png";

export default function AboutPageBody(){
    return(
        <StyledAboutPageBody>
            <StyleAboutImage src={aboutImage}/>
            <StyledAboutPageBodyIntro>
                <h1 id="about-intro-title">ABOUT</h1>
                <StyleArchivementLogo src={archivementLogo}/>
            </StyledAboutPageBodyIntro>
        </StyledAboutPageBody>
    );
}