import { styled } from "styled-components";
import HoverButton from "../HoverButton";
import "./MainPageBody.css"
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player'

const archivementIcon = "/assets/icons/archivement-icon.png";

const StyledMainPageBody = styled.div`
    // display: flex;
    // margin-top: 347px;
`
const StyledMainPageBodyIntro = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Pretendard;
    font-size: 32px;
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

const StyledHoverButtonDiv = styled.div`
    margin-top: 50px;
`

const StyledMainVideoDiv = styled.div`
    position: relative;
`

const StyledMainVideo = styled.video`
    object-fit: cover;
    height: 1100px;
    width: 100%;
`

const StyledMainTitle = styled.div`
    position: relative;
    top: -700px;
`



export default function MainPageBody(){
    const navigate = useNavigate();
    const onHandleClick= () =>{
        navigate("/gallery")
    }

    function onNotClickVideo(){

    }
    

    return (
        <StyledMainPageBody>
            <StyledMainVideoDiv>
                <StyledMainVideo width="100%" height="auto" autoPlay={true} loop muted controls={false}>
                    <source src="/assets/videos/main-background.mp4" type="video/mp4"/>
                </StyledMainVideo>
            </StyledMainVideoDiv>

            {/* <video autoPlay={true} loop muted playing={true} src="/assets/videos/main-background.mp4">
            </video>
            <ReactPlayer 
                url="/assets/videos/main-background.mp4"
                muted
                controls
                playing={true}
                width={"100%"}
                height={"0"}
                id={"main-background-video"}
            /> */}
            <StyledMainTitle>
                <StyleArchivementIcon src={archivementIcon}/>
                <StyledMainPageBodyIntro>
                    <div>여러분의 갤러리 속 깊숙한 추억들을 아카이브먼트가 소중하게 보관해드릴게요.</div>
                    <div>씬스케이프로 직접 아카이브먼트 포스터를 만들어보세요.</div>
                </StyledMainPageBodyIntro>
                <StyledHoverButtonDiv>
                    <HoverButton button_label={"Select"} handleclick={onHandleClick}/>
                </StyledHoverButtonDiv>
            </StyledMainTitle>
        </StyledMainPageBody>
    )
}