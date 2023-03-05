import * as Components from './styled';
import { CharacterSides } from '../../types/CharacterSide';

type Props = {
    x: number;
    y: number;
    side: CharacterSides;
}

 export const  Personagem  = ( {x, y, side }:Props ) => {
    const size =30;
   const sides = {
      down :0 ,
      left: -30,
      right: -60,
      up: -90
   }

 return(   
     <Components.Boneco
     sizer={size}
     left={x * size}
     top={y * size}
     sidePos={ sides[side] ?? 0 }    
     >
 </Components.Boneco> 

  )
}