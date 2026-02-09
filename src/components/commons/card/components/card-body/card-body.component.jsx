import React from "react";
import {
  BodyContent,
  CardBodyWrapper,
  Circle,
  DateAndAuthorWrapper,
  Title,
  Text,
  ChipsContainer,
  ChipsCard
} from "./card-body.styles";
import { Caption, Small } from "assets/styles/default";


function DateAndAuthor({ date, author }) {
  if(!date && !author) return null

  return (
    <DateAndAuthorWrapper>
      <Small>{date}</Small>
      <Circle>•</Circle>
      <Small>{author}</Small>
    </DateAndAuthorWrapper>
  );
}

export function CardBody({ title, content, createdAt, author, categories = [] }) {
  const createdPost = new Date(createdAt || "").toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  
  return (
    <CardBodyWrapper>
      <DateAndAuthor date={createdPost} author={author} />
      <BodyContent>
        <Title>{title}</Title>
        <Text>{content}</Text>
      </BodyContent>
      <ChipsContainer>
        {categories.map(category => (
          <ChipsCard key={category.id}>
            <Caption>{category.name}</Caption>
          </ChipsCard>
        ))}
      </ChipsContainer>
    </CardBodyWrapper>
  );
}