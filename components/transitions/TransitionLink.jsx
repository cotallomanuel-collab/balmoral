"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { useTransitionNavigate } from "./TransitionProvider";

const TransitionLink = forwardRef(function TransitionLink(
  { href, children, onClick, ...props },
  ref
) {
  const navigate = useTransitionNavigate();

  return (
    <Link
      ref={ref}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);
        navigate?.(href);
      }}
      {...props}
    >
      {children}
    </Link>
  );
});

export default TransitionLink;
