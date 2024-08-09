// components/Modal.tsx

import React from 'react';
import { createPortal } from 'react-dom';
import { BsXLg } from 'react-icons/bs';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50 m-4">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="w-full max-w-2xl bg-white rounded-lg md:rounded-xl px-6 py-6 z-10 dark:bg-secondary-dark-500 relative ">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 p-4 bg-secondary-dark-500 rounded-lg md:rounded-xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.95)]"
        >
          <BsXLg className='text-white' />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
