import React, { useState, useEffect, useRef } from "react";

interface TooltipSepoliaProps {
  content: React.ReactNode;
  children: React.ReactNode;
}

const TooltipSepolia: React.FC<TooltipSepoliaProps> = ({ content, children }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      tooltipRef.current &&
      !tooltipRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setClicked(false);
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (visible) {
      // Update tooltip position when visible
      setTooltipPosition();
    }
  }, [visible]);

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    if (!clicked) {
      setVisible(false);
    }
  };

  const handleClick = () => {
    setClicked(!clicked);
    setVisible(true); // Ensure the tooltip is visible when clicked
  };

  const setTooltipPosition = () => {
    if (!buttonRef.current || !tooltipRef.current) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    const tooltipPosition = buttonRect.right + tooltipRect.width > viewportWidth ? "right-0" : "left-0";
    
    // Apply tooltip position
    tooltipRef.current.style.left = tooltipPosition === "left-0" ? "0" : "auto";
    tooltipRef.current.style.right = tooltipPosition === "right-0" ? "0" : "auto";
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={buttonRef}
        className="relative"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {visible && (
        <div
          ref={tooltipRef}
          className={`absolute w-[300px] bg-black text-white p-4 rounded border border-gray-700 top-full mt-2 z-10`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default TooltipSepolia;
