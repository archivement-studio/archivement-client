import { styled } from 'styled-components';
import './Button.css'
import { Link } from 'react-router-dom';

const StyledButton = styled.div`
    margin: 0px auto;
    width: 170px;
    height: 60px;
    border: 0px;
    border-radius: 37.5px;
    border: 2px solid #4B4B4B;
    background: rgba(133, 133, 133, 0.20);
    backdrop-filter: blur(7.5px);

    text-align: center;

    display: flex;
`

const StyleText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px auto;

    color: #FFF;
    text-align: center;
    font-family: Pretendard;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 33px */
    letter-spacing: -0.132px;
`

const StyleBorder = styled.div`
    background: url(https://img1.daumcdn.net/thumb/C428x428/?scode=mtistory2&fname=https%3A%2F%2Ftistory4.daumcdn.net%2Ftistory%2F4809359%2Fattach%2F1af7989e615749b0b3f522ea82e59ba8) padding-box, linear-gradient(90deg, #eaeaa7 , #ffcdf3aa, #c1b0e6) border-box;

    background-origin: border-box;
    background-clip: content-box, border-box;

    border-radius: 20px;
    border: 4px solid transparent;å

    width: 170px;
    height: 60px;
`

export default function Button({button_label,to,onclick}){
    return(
        <Link onClick={onclick} to={to}>
            <StyledButton id="button">
                <StyleText>{button_label}</StyleText>
            </StyledButton>
        </Link>
    );
}