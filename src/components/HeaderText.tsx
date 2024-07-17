import { ReactNode } from "react";
type THeaderProps = {
  children: ReactNode;
  className?: string; // Optional prop for custom class names
};

const HeaderText = ({ children }: THeaderProps) => {
  return (
    <div className="mx-auto">
      <h1 className="flex justify-center items-center text-4xl font-bold text-green-500 text-center">
        {children}
      </h1>
    </div>
  );
};

export default HeaderText;
