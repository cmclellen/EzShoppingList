import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
}

function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className="relative">
      <div>
        <h1 className="text-3xl font-semibold py-4">{title}</h1>
        {children}
      </div>
      <Sidebar />
    </div>
  );
}

export default PageLayout;
