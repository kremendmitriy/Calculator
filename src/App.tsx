import { Wrapper } from './components/Wrapper';
import { Screen } from './components/Screen';
import { ButtonBox } from './components/ButtonBox';
import { Button } from './components/Button';
import './App.css';
import { CalcProvider } from './components/Context/CalcContext';

const btnValues = [
   ['C', '+-', '%', '/'],
   [7, 8, 9, 'x'],
   [4, 5, 6, '-'],
   [1, 2, 3, '+'],
   [0, '.', '='],
];

export default function App() {
   return (
      <>
         <CalcProvider>
            <Wrapper>
               <Screen />
               <ButtonBox>
                  {btnValues.flat().map((btn, index) => {
                     return <Button value={btn} key={index} />;
                  })}
               </ButtonBox>
            </Wrapper>
         </CalcProvider>
      </>
   );
}
