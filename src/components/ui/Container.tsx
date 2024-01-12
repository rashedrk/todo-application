import { ReactElement } from "react";

type TContainerProps = {
  children: ReactElement;
};
const Container = ({ children }: TContainerProps) => {
  return (
    <div className="w-full h-screen mx-auto max-w-7xl">
      {children}
    </div>
  );
};

export default Container;
