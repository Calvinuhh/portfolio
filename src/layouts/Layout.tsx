import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className=" bg-[#1a1a2e] min-h-screen p-5">
      {children}
    </div>
  );
};

export default Layout;
