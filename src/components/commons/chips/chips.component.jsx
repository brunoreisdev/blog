import React from "react";
import { ChipsWrapper } from "./chips.styles";


export function Chips({ children, className, onClick }) {
  return (
    <ChipsWrapper className={className} onClick={onClick}>
      {children}
    </ChipsWrapper>
  );
}