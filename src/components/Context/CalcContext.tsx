import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { ChildrenProps } from '../../../Utill';

export const CalcContext = createContext<{
   calc: {
      sign: string;
      num: number;
      res: number;
   };
   setCalc: Dispatch<
      SetStateAction<{
         sign: string;
         num: number;
         res: number;
      }>
   >;
}>({
   calc: {
      sign: '',
      num: 0,
      res: 0,
   },
   setCalc: () => {},
});
export function CalcProvider({ children }: ChildrenProps) {
   const [calc, setCalc] = useState({
      sign: '',
      num: 0,
      res: 0,
   });

   const providerValue = {
      calc,
      setCalc,
   };

   return (
      <CalcContext.Provider value={providerValue}>
         {children}
      </CalcContext.Provider>
   );
}
