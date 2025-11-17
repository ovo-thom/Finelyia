import { useState } from "react";
import Modal from "./Modal";

export default function AddTransactionButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#12a265] hover:bg-[#12a965] text-sm md:text-base mr-5 md:mr-3 text-gray-50 px-2 my-4 md:mt-5 md:px-4 md:min-w-56 py-2 rounded-lg cursor-pointer"
      >
        Ajouter dépense / transaction
      </button>
      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </>
  );
}
