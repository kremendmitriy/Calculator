import { useContext } from 'react';
import { ClassNameMap } from '../../Utill';
import { CalcContext } from './Context/CalcContext';

function getClassName(btn: string | number) {
   const className: ClassNameMap = {
      x: 'operations',
      '=': 'equals',
      '-': 'operations',
      '+': 'operations',
      '/': 'operations',
   };
   const result: string = className[btn];
   return result;
}

export function Button({ value }: { value: number | string }) {
   const { calc, setCalc } = useContext(CalcContext);

   // Честно, без понятия как это исправить. Я зашёл слишком глубоко, я не хочу менять btnValues в App компоненте на два разных массива со строками и числами. TypeScript меня сжирает (\0-0/)
   const commaClick = () => {
      setCalc({
         ...calc,
         num: calc.num.toString().includes('.')
            ? calc.num
            : calc.num.toString() + '.',
      });
   };

   const resetClick = () => {
      setCalc({ sign: '', num: 0, res: 0 });
   };

   const numberClickButton = () => {
      const numberString = value.toString();

      let numberValue;
      if (numberString === '0' && calc.num === 0) {
         numberValue = 0;
      } else {
         numberValue = Number(calc.num + numberString);
      }

      setCalc({
         ...calc,
         num: numberValue,
      });
   };

   const signClick = () => {
      setCalc({
         sign: String(value),
         res: !calc.res && calc.num ? calc.num : calc.res,
         num: 0,
      });
   };

   const equalsClick = () => {
      if (calc.res && calc.num) {
         const math = (a: number, b: number, sign: string) => {
            const result: { [key: string]: (a: number, b: number) => number } =
               {
                  '+': (a: number, b: number) => a + b,
                  '-': (a: number, b: number) => a - b,
                  '/': (a: number, b: number) => a / b,
                  x: (a: number, b: number) => a * b,
               };
            return result[sign](a, b);
         };
         setCalc({
            res: math(calc.res, calc.num, calc.sign),
            sign: '',
            num: 0,
         });
      }
   };

   const procentClick = () => {
      setCalc({
         num: calc.num / 100,
         res: calc.res / 100,
         sign: '',
      });
   };

   const plusMinus = () => {
      setCalc({
         num: calc.num ? calc.num * -1 : 0,
         res: calc.res ? calc.res * -1 : 0,
         sign: '',
      });
   };

   const handleBtnClick = () => {
      const results: { [key: string]: () => void } = {
         C: resetClick,
         '.': commaClick,
         '/': signClick,
         '+': signClick,
         '-': signClick,
         x: signClick,
         '=': equalsClick,
         '%': procentClick,
         '+-': plusMinus,
      };

      if (results[value]) {
         return results[String(value)]();
      } else {
         return numberClickButton();
      }
   };
   return (
      <button
         className={`${getClassName(
            value
         )} bg-[#b4d8e3] h-[3.5rem] p-[10px] rounded-[10px] flex items-center justify-center cursor-pointer text-black fs-[1.5rem] border-0 hover:border-2 hover:border-black`}
         onClick={handleBtnClick}
      >
         {value}
      </button>
   );
}
