import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  position?: 'top' | 'right' | 'bottom' | 'left';
  title?: string;
  children?: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, position = 'right', title, children }) => {
  const [fullWidth, setFullWidth] = useState<boolean>(false);
  const [translateValue, setTranslateValue] = useState<string>('translate-y-full');

  // Set full width and translate value based on position
  useEffect(() => {
    setFullWidth(position === 'top' || position === 'bottom');
    switch (position) {
      case 'top':
        setTranslateValue('-translate-y-full');
        break;
      case 'bottom':
        setTranslateValue('translate-y-full');
        break;
      case 'left':
        setTranslateValue('-translate-x-full');
        break;
      case 'right':
      default:
        setTranslateValue('translate-x-full');
        break;
    }
  }, [position]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`rounded-t-2xl fixed ${
          position === 'top' ? 'top-0 left-0 right-0' :
          position === 'bottom' ? 'bottom-0 left-0 right-0' :
          position === 'left' ? 'left-0 top-0 bottom-0' : 'right-0 top-0 bottom-0'
        } ${fullWidth ? 'w-full' : 'w-64'} bg-secondary-dark-500 shadow-lg transform transition-transform ${
          isOpen ? 'translate-x-0 translate-y-0' : `${translateValue}`
        }`}
      >
        <div className={` p-4 ${position === 'bottom' ? 'flex justify-between items-end' : 'flex justify-between items-center'}`}>
          <h2 className="text-sm md:text-lg font-semibold">{title || 'Drawer Title'}</h2>
          <button onClick={onClose}>
            <FiX className="h-6 w-6 text-white" />
          </button>
        </div>
        <div className="p-4 overflow-y-auto mb-12" style={{ maxHeight: 'calc(100vh - 8rem)' }}>
          {children ? (
            <>{children}</>
          ) : (
            <p>Drawer content goes here.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Drawer;
