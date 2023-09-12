import { styled } from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const StyledPosterOutterDiv = styled.div`
    opacity: 0.5;
`

const StyledPosterOutterImg = styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.5;
`
const SytledPosterInnerDiv = styled.div`
    top: 9%;
    left: 50%;
    transform: translate(-50%, 50%);
    position: absolute;
    display: flex;
`

const SytledPosterInnerImgDiv = styled.div`
    top: 7%;
    left: 50%;
    transform: translate(-50%, 50%);
    position: absolute;
    display: flex;
`

const StyledPosterInnerImg = styled.img`
    width: 50%;
    margin: 0px auto;
    border-radius: 7px;
`

export default function PosterPageResult(){
    useEffect(() => {
        AOS.init({
            once: false
        });
    })
      
    return (
        <div>
            <StyledPosterOutterDiv>
                <StyledPosterOutterImg src="/assets/meta/poster-meta.png" data-aos="zoom-in" data-aos-delay="550"/>
            </StyledPosterOutterDiv>
            <SytledPosterInnerImgDiv>
            <StyledPosterInnerImg src="/assets/meta/poster-meta.png" data-aos="flip-up" data-aos-delay="650"/>
            </SytledPosterInnerImgDiv>
            <SytledPosterInnerDiv>
                <div data-aos="zoom-out" data-aos-duration="500">
                    <h1>포스터가 완성되었습니다.</h1>
                </div>
            </SytledPosterInnerDiv>
        </div>
    );
}