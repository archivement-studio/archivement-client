import styled from 'styled-components';

export default function ModalOverlay(props) {
    async function onBlur(){
        // let promise = new Promise((resolve, reject) => {
        //     setTimeout(() => resolve("완료!"), 3000)

        // });
        // await promise;
        console.log("hello good");
    }

    return (
        <Overlay show={props.show}>
            <Backdrop
            // onChange={onBlur}
            // onClick={props.onHideModal}
            className={props.blur ? 'blurEffect' : ''}
            />
            {props.children}
        </Overlay>
    );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${props => (props.show ? 'block' : 'none')};
`;
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(11, 19, 30, 0.37);

  &.blurEffect {
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
  }
`;