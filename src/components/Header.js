import { styled } from "styled-components"
import './Header.css'
import { Link } from "react-router-dom";
const archivementLogo = "/assets/images/archivement-logo.png";

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    color:#FFFFFF;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    height: 98px;

    background: rgba(0, 0, 0, 0.40);
    backdrop-filter: blur(6px);
    
    border-bottom: 1px solid;
`

const StyleHeaderMenuLeftItem = styled.div`
    display: flex;
    margin: auto 0px;
    width: 300px;
`

const StyleHeaderMenuCenterItem = styled.div`
    display: flex;
    margin: auto 0px;
    width: 300px;
`


const StyleHeaderMenuRightItem = styled.div`
    display: flex;
    justify-content: right;
    margin: auto 0px;
    width: 300px;
`


const StyleHeaderLogo = styled.img`
    margin: 0px auto;
    width: 261px;
    height: 36.998px;
    flex-shrink: 0;
`

export default function Header(){

    return (
        <StyledHeader>
            <StyleHeaderMenuLeftItem>
                <div id="home"><Link className="link" to="/">HOME</Link></div>
                <div id="store"><a className="link" href="https://smartstore.naver.com/givven">STORE</a></div>
            </StyleHeaderMenuLeftItem>
            <StyleHeaderMenuCenterItem>
                <Link className="link" to="/"><StyleHeaderLogo src={archivementLogo}/></Link>
            </StyleHeaderMenuCenterItem>
            <StyleHeaderMenuRightItem>
                <div id="about"><Link className="link" to="/about">ABOUT</Link></div>
                <div id="sound">SOUND OFF</div>
            </StyleHeaderMenuRightItem>
        </StyledHeader>
    )
}