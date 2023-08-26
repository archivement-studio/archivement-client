import { styled } from "styled-components";
import HoverButton from "../HoverButton";
import "./MainPageBody.css"

const archivementIcon = "/assets/icons/archivement-icon.png";

const StyledMainPageBody = styled.div`
    // display: flex;
    margin-top: 347px;
`
const StyledMainPageBodyIntro = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 48px */
    letter-spacing: -0.192px;

    margin-top: 53px;
`
const StyleArchivementIcon = styled.img`
    display: flex;
    margin: 0px auto;
    flex-shrink: 0;
    width: 119px;
`


export default function MainPageBody(){
    
    return (
        <StyledMainPageBody>
            <StyleArchivementIcon src={archivementIcon}/>
            <StyledMainPageBodyIntro>
                <h1>여러분의 갤러리 속 깊숙한 추억들을 아카이브먼트가 소중하게 보관해드릴게요.</h1>
                <h1>씬스케이프로 직접 아카이브먼트 포스터를 만들어보세요.</h1>
            </StyledMainPageBodyIntro>
            <HoverButton button_label={"Select"}/>
        </StyledMainPageBody>
    )
}