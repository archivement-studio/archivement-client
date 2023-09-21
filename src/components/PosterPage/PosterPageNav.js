import { styled } from "styled-components";
import "./PosterPageNav.css"
import PosterPageAtom from "../../state/PosterPageAtom";
import { useRecoilState } from "recoil";

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

    cursor: none;
`;

const StyledNavCenterItem = styled.div`
    text-align: center;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 42px */
    letter-spacing: -0.168px;

    height: 43px;
`;

const StyledNavRgithItem = styled.div`
    display: flex;
    justify-content: right;
    margin-left: 39px;
    width: 50px;

    cursor: none;
`;

const poster_left_nav = "/assets/icons/poster-left-nav.svg";
const poster_right_nav = "/assets/icons/poster-right-nav.svg";

export default function PosterPageNav(){
    const [posterState,setPosterState] = useRecoilState(PosterPageAtom);

    function onLeftButton(){
        let posterStateTemp = { ...posterState };
        let step = posterStateTemp['step'];
        if(step !== 0){
            posterStateTemp['step'] = posterStateTemp['step'] - 1; 
        }

        setPosterState(posterStateTemp)
    }

    async function onRightButton(){
        let posterStateTemp = { ...posterState };
        let step = posterStateTemp['step'];
        if(step !== 3){
            posterStateTemp['step'] = posterStateTemp['step'] + 1; 
        }

        setPosterState(posterStateTemp)
    }

    return (
        <StyledPosterNav id="poster-nav">
            <StyledNavLeftItem>
                <img src={poster_left_nav} onClick={onLeftButton}/> 
            </StyledNavLeftItem>
            <StyledNavCenterItem>
                <div>{posterState.titles[posterState['step']]}</div>
            </StyledNavCenterItem>
            <StyledNavRgithItem>
                <img src={poster_right_nav} onClick={onRightButton}/> 
            </StyledNavRgithItem>
        </StyledPosterNav>
    );
}