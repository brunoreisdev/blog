import React from "react";
import { CardWrapper }  from "./card.styles";
import { CardHeader, CardBody } from "./components";


export function Card({ title, content, uri }) {
  return (
    <CardWrapper>
      <CardHeader uri="https://dws-tech-test-assets.s3.amazonaws.com/images/thumb-1.jpg" />
      <CardBody content={content} />
    </CardWrapper>
  );
}