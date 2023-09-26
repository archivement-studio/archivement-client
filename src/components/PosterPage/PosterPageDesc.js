import { styled } from "styled-components";

const StyledPosterPageDesc = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledDescItem = styled.div`
    width: 550px;
    padding-top: 86px;
    // position: absolute;
    // left: 50%;
    // transform: translate(-50%, 50%);
    // top: 990px;

    color: #FFF;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 36px */
    letter-spacing: -0.144px;
`;

const StyledRgithItemComponent = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid;
    border-bottom: 1px solid;
`;

export default function PosterPageDesc(){
    return (
        <StyledPosterPageDesc id="poster-desc">
            <StyledDescItem>
                <StyledRgithItemComponent className="detail-right-component">
                    <div>DATE</div>
                    <div>2023.00.00</div>
                </StyledRgithItemComponent>
                <StyledRgithItemComponent className="detail-right-component">
                    <div>NAME</div>
                    <div>입력한 이름 노출</div>
                </StyledRgithItemComponent>
                <StyledRgithItemComponent className="detail-right-component">
                    <div>PLACE</div>
                    <div>Korea</div>
                </StyledRgithItemComponent>
            </StyledDescItem>
        </StyledPosterPageDesc>
    );
}