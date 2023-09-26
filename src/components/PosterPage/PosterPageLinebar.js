import { Component, useEffect, useState } from "react";
import Draggable from "react-draggable";
import { styled } from "styled-components";
import "./PosterPageLinebar.css"
import { useRecoilState } from "recoil";
import PosterPageAtom from "../../state/PosterPageAtom";

// export default function PosterPageLinebar(){
//   return (
//     <Draggable axis="x">
//       <div className="box">I can be dragged anywhere</div>
//     </Draggable>
//   );
// }

const Linebar = styled.div`
  border-left: 3px solid #FFFFFF;
  // height: 545px;
  height: 563px;
  top: -9px;
  position:absolute;
  cursor: pointer;
`

const LinebarNav = styled.img`
  position: absolute;
  cursor: pointer;
  top: -5px;
  padding-right: 11px;
  padding-left: 11px;
  left: -11px;
  // bottom: 5px;
  // width: 25px;
  cursor: pointer;
  -webkit-user-drag: none;
`

const LinebarTop = styled.img`
  position: absolute;
  left: -12px;
  // bottom: -3px;
  bottom: 5px;
  width: 26px;
  cursor: pointer;
  -webkit-user-drag: none;
`

const LinebarBottom = styled.img`
  position: absolute;
  left: -12px;
  top: 549px;
  bottom: 0px;
  width: 26px;
  // top: 541px;
  cursor: pointer;
  -webkit-user-drag: none;
}
`

const line_gap = 3

export default function PosterLinebar(){
  const [activeDrags, setActiveDrags] = useState(0);
  const [deltaPosition, setDeltaPosition] = useState({
    x: 0, y: 0
  });
  const [controlledPosition,setControlledPosition] = useState({
    x: 500, y: 200
  })
  const [posterState,setPosterState] = useRecoilState(PosterPageAtom);

  const handleDrag = (e, ui) => {
    const {x, y} = deltaPosition;
    console.log("움직잉:",x);
    setDeltaPosition({
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    );
  };

  const onStart = () => {
    setActiveDrags(++activeDrags);
  };

  const onStop = () => {
    setActiveDrags(--activeDrags);
  };
  const onDrop = (e) => {
    setActiveDrags(--activeDrags);
    if (e.target.classList.contains("drop-target")) {
      alert("Dropped!");
      e.target.classList.remove('hovered');
    }
  };
  const onDropAreaMouseEnter = (e) => {
    if (activeDrags) {
      e.target.classList.add('hovered');
    }
  }
  const onDropAreaMouseLeave = (e) => {
    e.target.classList.remove('hovered');
  }

  // For controlled component
  const adjustXPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = controlledPosition;
    setControlledPosition({x: x - 10, y});
  };

  const adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = controlledPosition;
    setControlledPosition({x, y: y - 10});
  };

  const onControlledDrag = (e, position) => {
    const {x, y} = position;
    setControlledPosition({x, y});
  };

  const onControlledDragStop = (e, position) => {
    onControlledDrag(e, position);
    onStop();
  };

  const dragHandlers = {onStart: onStart, onStop: onStop};


  const [lineXPos, setLineXPos] = useState();

  
  const handleSize = () => {
    try{
      const width = Number(window.getComputedStyle(document.getElementById("poster-image")).width.split('px')[0]);
      const xpos = Number(window.getComputedStyle(document.getElementById("poster-image")).marginLeft.split('px')[0]);
      const position = (xpos+width/2);
      setLineXPos(position+"px");
    }
    catch(e){
      
    }
  };

  useEffect(()=>{
    handleSize();
  },[]);

  useEffect(()=>{
      window.addEventListener("resize", handleSize);
  },[]);

  function onDrag(e,data){
    let position = 485 + Number(data['node'].style.webkitTransform.split("translate(")[2].split('px')[0]);

    let posterTemp = {...posterState};
    posterTemp['line_xpos'] = position;
    setPosterState(posterTemp);
    console.log(posterState);
  }

  return(
    <Draggable bounds={{left: -485, right: 485-line_gap}} positionOffset={{x: lineXPos, y: '0%'}} axis="x" onDrag={onDrag} >
      {/* <div id="linebar"/> */}
      <div>
        <LinebarTop src="/assets/images/linebar-circle.svg"/>
        <LinebarNav src="/assets/images/linebar-nav.svg"/>
        <LinebarBottom src="/assets/images/linebar-circle.svg"/>
      </div>
    </Draggable>
  );
  
}



// import { Component } from "react";

// export default class Draggable extends Component {
//     constructor(props) {
//       super(props);
      
//       this.startDrag = this.startDrag.bind(this);
//       this.stopDrag = this.stopDrag.bind(this);
//       this.updatePosition = this.updatePosition.bind(this);
//     };
    
//     state = {
//       x: "50%",
//       y: 0,
//       offsetX: 0,
//       offsetY: 0,
//       cursor: 'default'
//     };
  
//     startDrag(e) {
//       const { left, top } = this.draggableContainer.getBoundingClientRect();
//       console.log("헤헤헤헤",e);
//       document.addEventListener('mousemove', this.updatePosition);
      
//       this.setState({
//         offsetX: e.clientX - left,
//         // offsetY: e.clientY - top,
//         cursor: 'pointer'
//       });
//     }
  
//     stopDrag(e) {
//       console.log("콜콜콜",e);
//       document.removeEventListener('mousemove', this.updatePosition);

//       console.log(e);
//     }
  
//     updatePosition(e) {
//       const {offsetX} =  this.state;
//       const linebar = document.getElementById('linebar');
//       console.log("레몬:",linebar);
//       console.log("x 포인트:",e.clientX - offsetX,e,linebar);
//       this.setState(({ offsetX, offsetY }) => ({
//         x: e.clientX - offsetX,
//         // y: e.clientY - offsetY,
//         // cursor: 'default'
//       }));
//     };
  
//     render() {
//       const { x, y, cursor } = this.state;
//       const { style, children } = this.props;
      
//       const defaultStyle = {
//         ...style,
//         position: 'relative',
//         top: y,
//         left: x,
//         cursor: cursor,
//       }
      
//       return (
//         <div id="linebar" ref={node => this.draggableContainer = node} onMouseDown={this.startDrag} onMouseUp={this.stopDrag} style={defaultStyle}>
//           {children}
//         </div>
//       )
//     };
//   }