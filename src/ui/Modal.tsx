import { createContext, ReactNode, useContext, useState } from "react";
import { createPortal } from "react-dom";

interface ModalContextType {
  openName: string;
  close: () => void;
  open: (name: string) => void;
}

const ModalContext = createContext<ModalContextType>({
  openName: "",
  close: () => {},
  open: (_name: string) => {},
});

export function useModal() {
  const context = useContext(ModalContext);
  if (context === null)
    throw new Error("ModalContext was used outside of ModalProvider");
  return context;
}

interface ModalProps {
  children: ReactNode;
}

function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

interface WindowProps {
  children: ReactNode;
  opens: string;
}

function Window({ children, opens }: WindowProps) {
  const { openName } = useContext(ModalContext);
  if (openName !== opens) return null;
  return createPortal(
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
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}

Modal.Window = Window;

export default Modal;
