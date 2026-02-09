import React from "react";
import { LargeSemiBold, ListWrapper, Li, Section } from "./list.styles";


function Row({label, onClick, lineStyle}) {
  return (
    <Li onClick={onClick} className={lineStyle}>{label}</Li>
  );
}

export function List({title, items, onClick, lineStyle, className}) {
  return (
    <Section className={className}>
      {title &&<LargeSemiBold>{title}</LargeSemiBold>}
      <ListWrapper>
        {items.map((item) => (
          <Row
            key={item.id}
            label={item.name}
            onClick={() => onClick(item.id)}
            style={lineStyle}
          />
        ))}
      </ListWrapper>
    </Section>
  );
}