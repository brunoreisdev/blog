import React from "react";
import { ChipsWrapper } from "./chips.styles";


export const Chips = ({ children, className, onClick }) => {
  return (
    <ChipsWrapper className={className} onClick={onClick}>
      {children}
    </ChipsWrapper>
  );
}