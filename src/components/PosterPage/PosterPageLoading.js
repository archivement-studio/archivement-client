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

const StylePosterLoading = styled.img`
    display: flex;
    margin: 0px auto;
    flex-shrink: 0;
    width: 273px;
    height: 273px;
`



const PosterLoading = "/assets/gif/loading.gif";
export default function PosterPageLoading(){
    return (
        <div>
            <StylePosterLoading src={PosterLoading}/>
            <StylePosterLoadingTitle>
                포스터 제작 중입니다.
            </StylePosterLoadingTitle>
        </div>
    );
}