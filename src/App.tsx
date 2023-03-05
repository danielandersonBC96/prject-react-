
import  * as Components from './App.styled';
import { Personagem } from './Components/character';
import { useBoneco } from './hooks/useBoneco';
import {  useEffect } from 'react';

 export const App = () => {
  
  
  const char = useBoneco();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);
 
  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();
      break;
      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
      break;
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();
      break;
      case 'KeyS':
      case 'ArrowDown':
        char.moveDonw();
      break;
    }
  }
   

  return(

     <Components.Container>
       <Components.Map>
      <Personagem  x={char.x} 
      y={char.y} 
      side={char.side}
      /> 
       </Components.Map>
     </Components.Container>
     
  )
}
export default App;
