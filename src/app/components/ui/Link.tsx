import React from "react";
import { Link as RouterLink, NavLink as RouterNavLink } from "react-router-dom";

export const Link = ({ to, children, className, ...props }: any) => {
  return (
    <RouterLink to={to} className={className} {...props}>
      {children}
    </RouterLink>
  );
};

export const NavLink = ({ to, children, className, ...props }: any) => {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        typeof className === "function" ? className({ isActive }) : className
      }
      {...props}
    >
      {children}
    </RouterNavLink>
  );
};
