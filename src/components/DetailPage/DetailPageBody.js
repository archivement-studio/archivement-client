import { styled } from "styled-components";
import Header from "../Header";

const StyleDetailPageBody = styled.div`
    background-image: url("/assets/meta/detail-meta.png");
    // content: "";
    // position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 800px;
    z-index: -1;
`

export default function DetailPageBody(){
    return (
        <StyleDetailPageBody>
            <Header/>
        </StyleDetailPageBody>
    );
}