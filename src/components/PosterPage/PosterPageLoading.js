import { styled } from "styled-components";

const StylePosterLoadingTitle = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 42px */
    letter-spacing: -0.168px;

    margin-top: 67.5px;
`

const StylePosterLoadingImage = styled.img`
    display: flex;
    margin: 0px auto;
    flex-shrink: 0;
    width: 110px;
    height: 110px;
`
const StylePosterLoading = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index:1;
`



const PosterLoading = "/assets/gif/loading.gif";
export default function PosterPageLoading(){
    return (
        <StylePosterLoading>
            <StylePosterLoadingImage src={PosterLoading}/>
            <StylePosterLoadingTitle>
                포스터 제작 중입니다.
            </StylePosterLoadingTitle>
        </StylePosterLoading>
    );
}