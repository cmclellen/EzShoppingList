import { TfiAlert } from "react-icons/tfi";
import { ButtonEvent } from "../utils/types";
import { useModal } from "./Modal";

interface ConfirmDeleteProps {
  onDelete: () => void;
  resourceName: string;
  disabled?: boolean;
}

function ConfirmDelete({
  onDelete,
  resourceName,
  disabled,
}: ConfirmDeleteProps) {
  const { close } = useModal();

  function handleOnDelete(e: ButtonEvent) {
    e.preventDefault();
    onDelete();
  }

  function handleOnCancel() {
    close();
  }

  return (
    <>
      <div className="pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/20 sm:mx-0 sm:size-10">
            <TfiAlert />
          </div>
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <h3
              className="text-base font-semibold text-primary"
              id="modal-title"
            >
              Delete Shopping List
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Are you sure you want to delete the {resourceName} shopping
                list?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:flex-row-reverse">
        <button
          onClick={(e) => handleOnDelete(e)}
          type="button"
          disabled={disabled}
          className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/75 sm:ml-3 sm:w-auto"
        >
          Delete
        </button>
        <button
          onClick={handleOnCancel}
          type="button"
          disabled={disabled}
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        >
          Cancel
        </button>
      </div>
    </>
  );
}

export default ConfirmDelete;
