"use client";

import { useState } from "react";
import "./ViewProjectButton.css";

interface ViewProjectButtonProps {
  modal: {
    title: string;
    description: string;
  };
}

const ViewProjectButton = ({ modal }: ViewProjectButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleClick} className="btn bg-[#3faa54] text-white rounded-md px-6 py-1">
        View Project
      </button>

      {isOpen && (
        <div className="modal">
          <h2>{modal.title}</h2>
          <div>{modal.description}</div>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ViewProjectButton;
