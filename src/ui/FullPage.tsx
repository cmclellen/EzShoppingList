import { ReactNode } from "react";
import PageLayout from "./PageLayout";

interface FullPageProps {
  title: string;
  children: ReactNode;
}

function FullPage({ title, children }: FullPageProps) {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center text-center items-center p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-background text-left shadow-xl transition-all mx-4 my-8 w-full max-w-lg p-4">
            <PageLayout title={title}>{children}</PageLayout>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullPage;
