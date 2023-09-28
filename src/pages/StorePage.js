import styled, { keyframes } from "styled-components";
import Header from "../components/Header";

const storeImgAnimation = keyframes`
0%{
    opacity: 0;
}
25%{
    opacity: 0.25;
}
50%{
    opacity: 0.5;
}
75%{
    opacity: 0.75;
}

100%{
    opacity: 1;
}
`

const StyleStoreDiv = styled.div`
    display: flex;
    animation: ${storeImgAnimation} 2s 0s linear alternate forwards;
`

const StyleStoreImg = styled.img`
    left: 50%;
    position: absolute;
    transform: translate(-50%, 50%);
    border-radius: 14px;
    width: 500px;

    top: 100px;
`

export default function StorePage(){


    return (
        <div>
            <Header/>
           <StyleStoreDiv>
                <StyleStoreImg src="/assets/images/archivement_store_white.png"/>
           </StyleStoreDiv>
        </div>
    );
}