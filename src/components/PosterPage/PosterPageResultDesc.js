import { styled } from "styled-components";

const StyledDetailPageDesc = styled.div`
    display: flex;
    justify-content: center;

    // background-color: #000000;

    // padding-right: 250px;
    // padding-left: 250px;
    // padding-top: 78px;
    // padding-bottom: 66px;

    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 36px */
    letter-spacing: -0.144px;
`;

const StyledDescLeftItem = styled.div`
    margin-right: 39px;
    width: 561px;

    text-align: left;

    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 36px */
    letter-spacing: -0.144px;
`;

const StyledDescRightItem = styled.div`
    margin-left: 39px;
    width: 561px;

    text-align: left;

    font-family: Pretendard;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: -0.132px;
`;

export default function PosterPageResultDesc({left_sentence, right_sentence}){
    return (
        <StyledDetailPageDesc>
            <StyledDescLeftItem>
                {left_sentence}
            </StyledDescLeftItem>
            <StyledDescRightItem>
                {right_sentence}
            </StyledDescRightItem>
        </StyledDetailPageDesc>
    );
}