import styled from "styled-components";

export const Boneco = styled.div<{sizer:number,left:number, top:number ,sidePos:number}>`
    
  width :${props => props.sizer}px ;
  height:${props => props.sizer}px ;
  position:absolute;
  left:${props => props.left}px;
  top:${props => props.top}px;
  background-image:url('/assets/char.png');
  background-position: 0px ${ props => props.sidePos}px ;

 
`;
