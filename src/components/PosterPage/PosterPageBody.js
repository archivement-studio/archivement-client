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
    border-radius: 5px;
`

const StylePosterUsernameDiv = styled.div`
    display: flex;

`



const StylePosterHoverButton = styled.div`
    margin-top: 50px;
`   

const StylePosterLineBar = styled.div`
    display: block;
    cursor: pointer;
`


const posterImage = "/assets/images/gallery/13.jpg";

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