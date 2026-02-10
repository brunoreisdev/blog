import React, { Activity } from "react";
import { Small } from "assets/styles/default";
import {
  ChipsSort,
  IconSort,
  BodyContainer,
  WrapperSort,
  SortLabel,
  RowSort,
  Content,
  Title
} from "./home.styles";
import { Filters, FiltersMobile, Gallery } from "components";
import { useGallery } from "hooks/gallery";
import { useIsMobile } from "hooks/media-query";


export const Home = () => {
  const { setFilters, filters } = useGallery();
  const isMobile = useIsMobile();

  const sortByDate = () => {
    const sortBy = filters.sortBy === 0 ? 1 : 0
    setFilters((acc) => ({ ...acc, sortBy: sortBy}))
  }

  const isMobileMode = isMobile ? "visible" : "hidden"
  return (
    <BodyContainer>
      <RowSort>
        <Title>DWS Blog</Title>
        <Activity mode={isMobileMode}><FiltersMobile /></Activity>
        <WrapperSort style={{ display: "flex", justifyContent: "flex-end" }}>
          <SortLabel>Sort by:</SortLabel>
          <ChipsSort onClick={sortByDate}>
            <Small>{filters.sortBy === 0 ? "Newest first" : "Oldest first"}</Small>
            <IconSort />
          </ChipsSort>
        </WrapperSort>
      </RowSort>
      <Content>
        <Activity mode={!isMobileMode}><Filters /></Activity>
        <Gallery />
      </Content>
    </BodyContainer>
  );
}