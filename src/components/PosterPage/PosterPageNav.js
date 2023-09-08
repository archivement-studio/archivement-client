import { styled } from "styled-components";
import "./PosterPageNav.css"

const StyledPosterNav = styled.div`
    display: flex;
    justify-content: space-between;

    padding-right: 92px;
    padding-left: 92px;
    padding-top: 176px;
    padding-bottom: 66px;

    color: #FFF;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 36px */
    letter-spacing: -0.144px;
`;

const StyledNavLeftItem = styled.div`
    display: flex;
    justify-content: left;
    margin-right: 39px;
    width: 50px;
`;

const StyledNavCenterItem = styled.div`
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 42px */
    letter-spacing: -0.168px;
`;

const StyledNavRgithItem = styled.div`
    display: flex;
    justify-content: right;
    margin-left: 39px;
    width: 50px;
`;

const poster_left_nav = "/assets/icons/poster-left-nav.svg";
const poster_right_nav = "/assets/icons/poster-right-nav.svg";

export default function PosterPageNav(){
    return (
        <StyledPosterNav id="poster-nav">
            <StyledNavLeftItem>
                <img src={poster_left_nav}/> 
            </StyledNavLeftItem>
            <StyledNavCenterItem>
                <div>사이드바를 옮겨 포스터를 제작해보세요.</div>
            </StyledNavCenterItem>
            <StyledNavRgithItem>
                <img src={poster_right_nav}/> 
            </StyledNavRgithItem>
        </StyledPosterNav>
    );
}