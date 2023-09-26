import { styled } from "styled-components";
import "./PosterPageUsername.css"
import { useState } from "react";

const StylePosterUsername = styled.div`
    margin: 0px auto;
    text-align: center;


    line-height: 70px;
`;

const StylePosterUsernameText = styled.input`
    color: #434343;
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.108px;
    background: #202020;

    border: 0;
    border-radius: 20px;

    width: 474px;
    height: 70px;
    margin-top: 36px;
`
const StyleUserNameTitle = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 42px */
    letter-spacing: -0.168px;
`

export default function PosterPageUsername({onChangeUsername}){
    let [isInputClicked, setIsInputClicked] = useState(false);
    return (
        <StylePosterUsername>
            <StyleUserNameTitle>
                포스터의 제목을 적어주세요.
            </StyleUserNameTitle>
            <StylePosterUsernameText 
                className="username"
                onFocus={ ()=> setIsInputClicked(true) }
                onBlur={ ()=> setIsInputClicked(false)}
                onChange={onChangeUsername}
                placeholder={isInputClicked === true ? "" : "제목을 입력해주세요."}
            />
        </StylePosterUsername>

    );
}