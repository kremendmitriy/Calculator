import { useContext } from 'react';
import { CalcContext } from './Context/CalcContext';
import { Textfit } from 'react-textfit';

export function Screen() {
   const { calc } = useContext(CalcContext);
   return (
      <Textfit className="h-[4rem] mb-[4rem]" max={70} mode="single">
         {calc.num ? calc.num : calc.res}
      </Textfit>
   );
}
