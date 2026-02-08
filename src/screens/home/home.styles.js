import styled from "styled-components";
import { Chips } from "../../components";
import { accent, neutrals } from "../../assets/colors";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { BodySmall, Container } from "../../assets/styles/default";


const WrapperSort = styled.div`
  display: flex;
  align-items: center;
  justify-content: "flex-end";
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
  padding-right: 8px;
  padding-left: 8px; 
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
`

const SortLabel = styled(BodySmall)`
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
  flex-wrap: wrap;
  justify-content: center;
`


export {
  ChipsSort,
  IconSort,
  BodyContainer,
  WrapperSort,
  SortLabel,
  RowSort,
  Content
}