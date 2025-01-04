import { ReactNode } from "react";
import Modal from "./Modal";
import { Outlet, useOutlet } from "react-router-dom";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
}

function PageLayout({ title, children }: PageLayoutProps) {
  const outlet = useOutlet();

  return (
    <Modal>
      {outlet ? (
        <Outlet />
      ) : (
        <div>
          <h1 className="text-3xl font-semibold pb-4">{title}</h1>
          {children}
        </div>
      )}
    </Modal>
  );
}

export default PageLayout;
