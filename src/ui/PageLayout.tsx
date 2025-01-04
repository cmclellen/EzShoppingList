import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Modal from "./Modal";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
}

function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <Modal>
      <div className="">
        <div>
          <h1 className="text-3xl font-semibold py-4">{title}</h1>
          {children}
        </div>
        <Sidebar />
      </div>
    </Modal>
  );
}

export default PageLayout;
