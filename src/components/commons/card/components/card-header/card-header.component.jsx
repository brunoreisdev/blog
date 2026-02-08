import React from "react";
import { CardHeaderImage, CardHeaderWrapper } from "./card-header.styles";

export const CardHeader = ({ uri }) => {
  return (
    <CardHeaderWrapper>
      <CardHeaderImage src={uri} alt="post image" />
    </CardHeaderWrapper>
  );
}