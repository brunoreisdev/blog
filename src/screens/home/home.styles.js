import styled from "styled-components";
import { Chips } from "components/commons";
import { accent, neutrals } from "assets/colors";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { Small, Container, H2 } from "assets/styles/default";


const WrapperSort = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const IconSort = styled(HiMiniArrowsUpDown)`
  font-size: 14px;
  color: ${accent.medium};
`

const ChipsSort = styled(Chips)`
  display: flex;
  color: ${neutrals.extraDark};
  width: 100px;
  cursor: pointer;
  padding: 8px;
  justify-content: space-between;

  &:hover {
    background-color: ${accent.medium};
    color: ${neutrals.extraLight};
  }

  &:hover ${IconSort} {
    color: ${neutrals.extraLight};
  }
`

const BodyContainer = styled(Container)`
  flex-direction: column;
  display: flex;
`

const SortLabel = styled(Small)`
  font-weight: 600;
  color: ${neutrals.extraDark};
  display: none;

  @media (min-width: 600px) {
    display: flex;
  }
`;

const RowSort = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  gap: 24px;
`

const ContentGrid = styled.div`
  display: flex;
  width: 100%;
`

const ContentFilter = styled.div`
  display: flex;
  width: 100%;
  max-width: 314px;
`

const Title = styled(H2)`
  display: none;
  @media (min-width: 900px) {
    display: flex;
  }
`;


export {
  ChipsSort,
  IconSort,
  BodyContainer,
  WrapperSort,
  SortLabel,
  RowSort,
  Content,
  ContentGrid,
  ContentFilter,
  Title
}