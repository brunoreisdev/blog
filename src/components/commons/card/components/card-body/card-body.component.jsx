import React from "react";
import { BodyContent, CardBodyWrapper, Circle, DateAndAuthorWrapper, Title, Text } from "./card-body.styles";


function DateAndAuthor({ date, author }) {
  return (
    <DateAndAuthorWrapper>
      <small>{date}</small>
      <Circle>•</Circle>
      <small>{author}</small>
    </DateAndAuthorWrapper>
  );
}

export function CardBody({ title, content }) {
  return (
    <CardBodyWrapper>
      <DateAndAuthor date="June 20, 2023" author="John Doe" />
      <BodyContent>
        <Title>This is the title of the article with two lines</Title>
        <Text>{content}</Text>
      </BodyContent>
    </CardBodyWrapper>
  );
}