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
    padding-top: 143px;
`

const StyleArchivementIcon = styled.img`
    width: 105px;
    margin-bottom: 22px;
`

const archivementIcon = "/assets/icons/archivement-icon.png";

export default function Footer(){
    return(
        <StyledFooter id="footer">
            <StyleFooterLeftItem>
                <StyleArchivementIcon src={archivementIcon}/>
                <h1 className="footer-title">SceneScape Demo</h1>
                <h1 className="footer-copyright">copyright. 2023 codecolony all right reserved.</h1>
            </StyleFooterLeftItem>
            <StyleFooterRightItem>
                <h1>codecolony@gmail.com</h1>
                <h1>+82 010-2795-1240</h1>
            </StyleFooterRightItem>
        </StyledFooter>
    );
}