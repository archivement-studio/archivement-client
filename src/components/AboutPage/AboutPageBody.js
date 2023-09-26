import { styled } from "styled-components";
import './AboutPageBody.css'
import HoverButton from "../HoverButton";
import AboutPageDesc from "./AboutPageDesc";
import AboutPageContactInfo from "./AboutPageContactInfo";
import Button from "../Button";

const StyledAboutPageBody = styled.div`
    // display: flex;
    // padding-top: 140px;
`
const StyleAboutImage = styled.img`
    display: flex;
    // margin: 0px auto;
    flex-shrink: 0;
    width: 100%;
    // width: 1200px;
    // height: 670px;
    padding-top: 156px;
`

const StyledAboutPageBodyIntro = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Pretendard;
`

const StyleArchivementLogo = styled.img`
    display: flex;
    margin: 0px auto;
    flex-shrink: 0;
    width: 1200px;
    margin-top: 176px;
    margin-bottom: 208px;
`

const StyleArchivementMiniLogo = styled.img`
    display: flex;
    margin: 0px auto;
    flex-shrink: 0;
    width: 261px;
    margin-bottom: 138px;
    margin-top: 413px;
`

const StyleAboutHoverButton = styled.div`
    margin-top: 50px;
    margin-bottom: 272px;
`   

const archivementLogo = "/assets/images/archivement-logo.svg";

const aboutImage = "/assets/images/about-image.svg";

export default function AboutPageBody(){
    return(
        <StyledAboutPageBody>
            <StyledAboutPageBodyIntro>
                <h1 id="about-intro-title">ABOUT</h1>
                <AboutPageDesc
                    left_sentence={"Archivement(아카이브먼트)는 갤러리 속 쌓여간 사진들에 담긴 추억들을 다시 꺼내 ‘스쳐간 순간'들 그 자체로 기록하는 포스터 아카이브 브랜드입니다. 사람들이 촬영한 사진을 기반으로 다채로운 색채를 자극하는 포스터로 사진에 깃들어있는 이야기들과 기억이 함께 공존하는 방법을 제안합니다."}
                    right_sentence={"Archivement is a poster archive brand that brings out the memories in the photos that have been piling up in your gallery, documenting the 'fleeting moments' themselves. Based on photos taken by people, the colorful and stimulating posters suggest how stories and memories can coexist together."}
                />
                <StyleAboutImage src={aboutImage}/>
                <h1 id="story-intro-title">STORY</h1>
                <AboutPageDesc
                    left_sentence={"사람, 풍경, 장면, 음식 등 사람들이 휴대폰으로 열심히 찍는 사진들을 갤러리 한 구석에 자리잡고 있습니다. 사진들은 소중한 추억임에도 잘 들여다보지 않는, 그저 지나간 추억으로 남겨져 있습니다. 우리는 사람들이  과거의 사진을 다시 발견했을 때 추억 속에 잠기는 것처럼, 사람들이 순간을 회상하며 스스로의 행복했던 기억을 간직하길 바라는 마음을 담아  Archivement(아카이브먼트)가 탄생했습니다."}
                    right_sentence={"Tucked away in a corner of your gallery are the photos you've been furiously snapping on your phone: people, landscapes, scenes, food, and more. They're precious memories, but they're rarely looked at, and they're left in the past. We created Archivement because we wanted people to be able to relive moments and keep their own happy memories, just like we do when we rediscover photos from the past."}
                />
                <div className="margin-top-120"/>
                <AboutPageDesc
                    left_sentence={"Archivement(아카이브먼트)는 사람들의 기억들에 조금 더 집중해보기로 했습니다. 각자의 기억들이 새겨진 포스터를 평생 보관할 수 있는 저장소를 만들고 싶었습니다. 그래서 자동으로 포스터를 만들어주는 SceneScape(씬스케이프)를 구현하고, 무한히 만들어지는 포스터들을 NFT로 보관합니다. 아카이브먼트(Archivement)가 전하는 사람들의 시간들을, 그리고 순간들을 만나보세요. "}
                    right_sentence={"At Archivement, we wanted to focus on people's memories and create a repository where they could keep a poster of their memories forever. We built a SceneScape that automatically creates a poster and stores the infinite number of posters as an NFT. Discover the times and moments of people with Archivement."}
                />
                <div className="margin-bottom-169"/>
                <AboutPageContactInfo/>
                <div className="margin-bottom-158"/>
                {/* <StyleArchivementLogo src={archivementLogo}/> */}
                {/* <StyleArchivementMiniLogo src={archivementLogo}/> */}
            </StyledAboutPageBodyIntro>
            
            {/* <StyleAboutHoverButton>
                <Button button_label={"HOME"} to={"/"}/>
            </StyleAboutHoverButton> */}
        </StyledAboutPageBody>
    );
}