import React from "react";
import { useLocation, useNavigate } from "react-router";

export const Link = ({ to, children, className, ...props }: any) => {
  const navigate = useNavigate();
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
      }}
      {...props}
    >
      {children}
    </a>
  );
};

export const NavLink = ({ to, children, className, ...props }: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === to;

  const classNameResult = typeof className === "function" ? className({ isActive }) : className;

  return (
    <a
      href={to}
      className={classNameResult}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
      }}
      {...props}
    >
      {children}
    </a>
  );
};
