import { styled } from "styled-components";
import PosterPageNav from "./PosterPageNav";
import PosterPageUsername from "./PosterPageUsername";
import PosterPageLoading from "./PosterPageLoading";

const StylePosterImage = styled.img`
    display: flex;
    margin: 0px auto;
    flex-shrink: 0;
    width: 970px;
    height: 545px;
`

const StylePosterUsernameDiv = styled.div`
    display: flex;

`

const posterImage = "/assets/meta/about-meta.png";

export default function PosterPageBody(){
    return (
        <div>
            <PosterPageNav/>
            {/* poster 페이지: step1 */}
            {/* <StylePosterImage src={posterImage}/> */}

            {/* poster 페이지: step2 */}
            {/* <StylePosterUsernameDiv>
                <PosterPageUsername/>
            </StylePosterUsernameDiv> */}

            {/* poster 페이지 step2, loadding */}
            <PosterPageLoading/>
        </div>
    );
}