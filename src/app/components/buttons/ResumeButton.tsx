"use client";

import DocumentIcon from "@/app/svg/DocumentIcon";

const ResumeButton = () => {
  return (
    <button className="bg-[#6c757d] px-3 py-1.5 rounded-md btn" onClick={() => (window.location.href = "/img/port.png")}>
      <DocumentIcon />
    </button>
  );
};

export default ResumeButton;
