"use client";
import { ReactNode, MouseEvent } from "react";
import Link from "next/link";

type SmoothLinkProps = {
  href: string;
  highlight?: boolean;
  children: ReactNode;
  className?: string;
};

const LinkTo = ({ href, children, highlight = true, className = "" }: SmoothLinkProps) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
    window.history.pushState(null, "", href);
  };

  return (
    <Link href={href} onClick={handleClick} className={`${highlight ? "hover:text-blue-500" : ""} transition ${className}`}>
      {children}
    </Link>
  );
};

export default LinkTo;
