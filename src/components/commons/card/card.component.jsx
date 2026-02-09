import React from "react";
import { CardWrapper }  from "./card.styles";
import { CardHeader, CardBody } from "./components";


export function Card({ title, content, uri, createdAt, author, categories }) {
  return (
    <CardWrapper>
      <CardHeader uri={uri}/>
      <CardBody
        content={content}
        title={title}
        createdAt={createdAt}
        author={author}
        categories={categories}
      />
    </CardWrapper>
  );
}