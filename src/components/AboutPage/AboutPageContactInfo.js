import { styled } from "styled-components";
import "./AboutPageContactInfo.css"

const StyledContactInfo = styled.div`
    display: flex;
    justify-content: center;

    background-color: #8A6C47;

    // padding-right: 320px;
    // padding-left: 320px;
    padding-top: 133px;
    padding-bottom: 101px;

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

const StyledRightItemComponent = styled.div`
    display: flex;
    justify-content: space-between;

    text-align: right;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 36px */
    letter-spacing: -0.144px;
`;

const StyleArchivementLogo = styled.img`
    display: flex;
    margin: 0px auto;
    flex-shrink: 0;
    width: 300px;
    // margin-bottom: 208px;
`

const archivementLogo = "/assets/images/archivement-logo.svg";

export default function AboutPageContactInfo(){
    return (
        <StyledContactInfo>
            <StyledDescLeftItem>
                <div id="contact-logo">
                    <div><StyleArchivementLogo src={archivementLogo}/></div>
                    <div className="left-16">SHOWROOM</div>
                </div>
                <StyledRightItemComponent className="date">
                    <div>DATE</div>
                    <div>2023.10.04 - 2023.10.06</div>
                </StyledRightItemComponent>
            </StyledDescLeftItem>
            <StyledDescRgithItem>
                <StyledRightItemComponent className="address">
                    <div>ADRESS</div>
                    <div>
                        <p className="address-1">경기도 성남시 수정구 성남대로 1342</p>
                        <p className="address-2">가천대학교 비전타워 지하1층 전시관</p>
                    </div>
                </StyledRightItemComponent>
                <StyledRightItemComponent className="gallery-time">
                    <div></div>
                    <div>09:30 - 18:00</div>
                </StyledRightItemComponent>
            </StyledDescRgithItem>
        </StyledContactInfo>
    );
}