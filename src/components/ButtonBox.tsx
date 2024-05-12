import { ChildrenProps } from '../../Utill.tsx';

export function ButtonBox({ children }: ChildrenProps) {
   return <div className="grid grid-cols-4 gap-[0.5rem]">{children}</div>;
}
