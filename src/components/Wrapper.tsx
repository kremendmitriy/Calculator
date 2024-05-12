import { ChildrenProps } from '../../Utill.tsx';

export function Wrapper({ children }: ChildrenProps) {
   return (
      <div className="bg-[beige] w-[20rem] p-[2rem] mt-[4rem] rounded-[1rem] shadow-lg">
         {children}
      </div>
   );
}
