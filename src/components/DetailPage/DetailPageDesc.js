import { styled } from "styled-components";
import "./DetailPageDesc.css";
import GalleryPageImageAtom from "../../state/GalleryPageImageAtom";
import { useRecoilState } from "recoil";

const StyledDetailPageDesc = styled.div`
    display: flex;
    justify-content: space-between;

    background-color: #000000;

    padding-right: 320px;
    padding-left: 320px;
    padding-top: 78px;
    padding-bottom: 66px;

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

const StyledRgithItemComponent = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid;
    border-bottom: 1px solid;
`;

export default function DetailPageDesc(){
    const [galleryImage, setGelleryImage] = useRecoilState(GalleryPageImageAtom);

    // let audio = new Audio(galleryImage['audio'])

    // const start = () => {
    //     audio.play()
    // }

    // if (galleryImage){
    //     audio.play();
    // }
    // else{
    //     audio.pause();
    // }


    return (
        <StyledDetailPageDesc id="detail-desc">
            <audio src={galleryImage['audio']} autoPlay={true} loop={true}></audio>
            <StyledDescLeftItem>
                {galleryImage['desc']}
            </StyledDescLeftItem>
            <StyledDescRgithItem>
                <StyledRgithItemComponent className="detail-right-component">
                    <div>DATE</div>
                    <div>{galleryImage['date']}</div>
                </StyledRgithItemComponent>
                <StyledRgithItemComponent className="detail-right-component">
                    <div>NAME</div>
                    <div>{galleryImage['name']}</div>
                </StyledRgithItemComponent>
                <StyledRgithItemComponent className="detail-right-component">
                    <div>PLACE</div>
                    <div>{galleryImage['place']}</div>
                </StyledRgithItemComponent>
            </StyledDescRgithItem>
            {/* <audio controls autoplay>
                <source src="/file_voice/sample.mp3" type="audio/mp3">
            </audio> */}
        </StyledDetailPageDesc>
    );
}