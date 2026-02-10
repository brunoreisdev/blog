import React from "react"
import {
  Content,
  Badge,
  ChipsIcon,
  ChipsLabel
} from "./item-selected.styles"

export function ItemsSelected({ items, dataRaw , onClick}) {
  if(!items.length) return null
  
  return (
    <Content>
      {items.map(id => {
        const name = dataRaw.find(item => item.id === id).name
        return(
        <Badge onClick={() => onClick(id)}>
          <ChipsLabel>{name}</ChipsLabel>
          <ChipsIcon  />
        </Badge>
      )}
    )}
    </Content>
  )
}