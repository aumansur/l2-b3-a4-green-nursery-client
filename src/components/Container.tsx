import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string; // Optional prop for custom class names
};

const Container = ({ children, className }: TContainerProps) => {
  // Default classes for the container
  const defaultClasses = "h-full w-full max-w-7xl  mb-10 mx-auto";
  // Combine default and custom classes
  const classes = className ? `${defaultClasses} ${className}` : defaultClasses;

  return <div className={classes}>{children}</div>;
};

export default Container;
