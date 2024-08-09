import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children,className }) => {
  return (
    <div className={`bg-white text-black dark:text-white shadow-md rounded-lg md:rounded-xl p-2 md:p-6 dark:bg-secondary-dark-500  ${className}`}>
          {children}
    </div>
  );
};

export default Card;
