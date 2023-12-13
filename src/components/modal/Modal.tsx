import { Dispatch, SetStateAction } from "react";
import { RxCross2 } from "react-icons/rx";
import Button from "../buttons/Button";

type ModalProps = {
  isOpen: boolean;
  handleOpen: Dispatch<SetStateAction<boolean>>;
  id: number;
  onDelete: (id: number) => void;
};

function Modal({ isOpen, onDelete, handleOpen, id }: ModalProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 backdrop-brightness-90 backdrop-blur-sm"></div>
          <div className="absolute max-w-sm p-8 bg-white rounded-lg">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Delete product</h3>
                  <RxCross2
                    onClick={() => handleOpen(false)}
                    className="w-5 h-5 text-gray-500 cursor-pointer"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    Are you sure you want to delete “Opna Women's Short Sleeve
                    Moisture” from your lists?
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Button
                  onClick={() => handleOpen(false)}
                  extraClassName="w-full"
                  variant="outline"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    onDelete(id);
                    return handleOpen(false);
                  }}
                  extraClassName="w-full bg-negative-600"
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
