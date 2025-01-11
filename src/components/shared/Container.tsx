import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">{children}</div>
  );
};

export default Container;