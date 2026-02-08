import React from "react";
import { BodySmall, H2 } from "../../assets/styles/default";
import { ChipsSort, IconSort, BodyContainer, WrapperSort, SortLabel, RowSort, Content } from "./home.styles";


export const Home = () => {
  const [sortBy, setSortBy] = React.useState(0);


  return (
    <BodyContainer>
      {/* row sort */}
      <RowSort>
        <H2>DWS Blog</H2>
        <WrapperSort style={{ display: "flex", justifyContent: "flex-end" }}>
          <SortLabel>Sort by:</SortLabel>
          <ChipsSort onClick={() => setSortBy(sortBy === 0 ? 1 : 0)}>
            <BodySmall>{sortBy === 0 ? "Newest first" : "Oldest first"}</BodySmall>
            <IconSort />
          </ChipsSort>
        </WrapperSort>
      </RowSort>
      
      <Content>
        <div>Filters</div>
        <div>Gallery</div>
      </Content>
    </BodyContainer>
  );
}