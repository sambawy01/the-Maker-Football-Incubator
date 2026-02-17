import React from "react";
import logoImage from "figma:asset/8fdaea0aefd035f14a3bf0d7cf353b3428cb9d0b.png";

export const Logo = () => {
  return (
    <img 
      src={logoImage} 
      alt="The Maker Football Incubator" 
      className="h-12 w-auto object-contain brightness-0 invert"
    />
  );
};
