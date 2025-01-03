import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
}

function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <>
      <h1 className="text-3xl font-semibold my-3">{title}</h1>
      {children}
    </>
  );
}

export default PageLayout;
