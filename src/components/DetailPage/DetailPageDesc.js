import { styled } from "styled-components";
import "./DetailPageDesc.css";

const StyledDetailPageDesc = styled.div`
    display: flex;
    justify-content: space-between;

    background-color: #000000;

    padding-right: 320px;
    padding-left: 320px;
    padding-top: 78px;
    padding-bottom: 66px;

    color: #FFF;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 36px */
    letter-spacing: -0.144px;
`;

const StyledDescLeftItem = styled.div`
    margin-right: 39px;
    width: 550px;
`;

const StyledDescRgithItem = styled.div`
    margin-left: 39px;
    width: 550px;
`;

const StyledRgithItemComponent = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid;
    border-bottom: 1px solid;
`;

export default function DetailPageDesc(){
    return (
        <StyledDetailPageDesc id="detail-desc">
            <StyledDescLeftItem>
            이곳은 사진 설명이 들어갈 공간입니다. 이곳은 사진 설명이 들어갈 공간입니다. 이곳은 사진 설명이 들어갈 공간입니다. 이곳은 사진 설명이 들어갈 공간입니다. 이곳은 사진 설명이 들어갈 공간입니다. 이곳은 사진 설명이 들어갈 공간입니다. 이곳은 사진 설명이 들어갈 공간입니다. 이곳은 사진 설명이 들어갈 공간입니다. 이곳은 사진 설명이 들어갈 공간입니다. 
            </StyledDescLeftItem>
            <StyledDescRgithItem>
                <StyledRgithItemComponent className="detail-right-component">
                    <div>DATE</div>
                    <div>2023.00.00</div>
                </StyledRgithItemComponent>
                <StyledRgithItemComponent className="detail-right-component">
                    <div>NAME</div>
                    <div>SW. Hwang</div>
                </StyledRgithItemComponent>
                <StyledRgithItemComponent className="detail-right-component">
                    <div>PLACE</div>
                    <div>Japan</div>
                </StyledRgithItemComponent>
            </StyledDescRgithItem>
        </StyledDetailPageDesc>
    );
}