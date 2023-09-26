import { styled } from "styled-components";
import "./Footer.css"

const StyledFooter = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 92px;
    padding-left: 92px;
    padding-bottom: 66px;

    border-top: 1px solid white;
`;

const StyleFooterLeftItem = styled.div`
    padding-top: 76px;
`

const StyleFooterRightItem = styled.div`
    text-align: right;
    padding-top: 78px;

    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 36px */
    letter-spacing: -0.144px;
`

const StyleArchivementIcon = styled.img`
    width: 105px;
    margin-top: 20px;
    margin-bottom: 30px;
`

const StyleArchivementLogo = styled.img`
    padding-top: 8px;
    padding-bottom: 20px;
    width: 275px;

`

const StyleArchivementLogo = styled.img`
    padding-bottom: 28px;
    width: 275px;

`

const archivementIcon = "/assets/icons/archivement-icon.png";

export default function Footer(){
    return(
        <StyledFooter id="footer">
            <StyleFooterLeftItem>
                <StyleArchivementIcon src={archivementIcon}/>
                <div className="footer-title">SceneScape Demo</div>
                <div className="footer-copyright">copyright. 2023 codecolony all right reserved.</div>
            </StyleFooterLeftItem>
            <StyleFooterRightItem>
                <StyleArchivementLogo src="/assets/images/archivement-logo.png"/>
                <div>codecolony@gmail.com</div>
                <div>+82 010-2795-1240</div>
            </StyleFooterRightItem>
        </StyledFooter>
    );
}