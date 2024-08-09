import React from 'react';

interface ModalConnectWalletProps {
  isOpen: boolean;
  onClose: () => void;
  connectToBraveWallet: () => void;
}

const ModalConnectWallet: React.FC<ModalConnectWalletProps> = ({ isOpen, onClose, connectToBraveWallet }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-lg w-11/12 md:w-1/3">
        <h2 className="text-xl font-bold mb-4 text-center">Connect Wallet</h2>
        <button
          onClick={connectToBraveWallet}
          className="w-full bg-primary-gold-500 text-white p-2 rounded-md mb-2"
        >
          Connect to BraveWallet
        </button>
        {/* Add more wallet options here */}
        <button
          onClick={onClose}
          className="w-full bg-gray-400 text-white p-2 rounded-md"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ModalConnectWallet;
