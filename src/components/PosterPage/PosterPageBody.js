import { styled } from "styled-components";
import PosterPageNav from "./PosterPageNav";

const StyleAboutImage = styled.img`
    display: flex;
    margin: 0px auto;
    flex-shrink: 0;
    width: 970px;
    height: 545px;
`
const aboutImage = "/assets/meta/about-meta.png";

export default function PosterPageBody(){
    return (
        <div>
            <PosterPageNav/>
            <StyleAboutImage src={aboutImage}/>
        </div>
    );
}