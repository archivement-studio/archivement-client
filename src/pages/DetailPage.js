import { styled } from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DetailPageBody from "../components/DetailPage/DetailPageBody";
import DetailPageDesc from "../components/DetailPage/DetailPageDesc";

const StyleDetailPage = styled.div`

`

export default function DetailPage(){
    return (
        <StyleDetailPage>
            <DetailPageBody/>
            <DetailPageDesc/>
            <Footer/>
        </StyleDetailPage>
    );
}