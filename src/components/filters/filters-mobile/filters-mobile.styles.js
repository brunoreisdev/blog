import { neutrals, secondary } from "assets/colors";
import { Caption } from "assets/styles/default";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Chips } from "components/commons";
import { Li } from "components/commons/list/list.styles";
import { List } from "components/commons/list/list.component";

const FilterWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 8px;
`

const ChipsWrapper = styled(Chips)`
  background-color: ${neutrals.lightest};
  border: 1px solid ${secondary.medium};
  color: ${secondary.medium};
  padding: 4px 8px;
  align-items: center;
  width: min-content;
  cursor: pointer;

  &:hover, &::selection {
    background-color: ${secondary.mediumOpacity};
    color: ${secondary.medium};
  }
  &:active {
    background-color: ${secondary.mediumOpacity};
    color: ${secondary.medium};
  }
`;

const ChipsLabel = styled(Caption)`
  font-weight: bold;
`

const ChipsIcon = styled(MdKeyboardArrowDown)`
  color: ${secondary.medium};
  font-size: 24px;
`

const ChipsFilters = styled.div`
  position: relative;
  display: inline-block;
`

const Modal = styled.div`
  position: absolute;
  margin-top: 8px;
  left: 0;
  background-color: ${neutrals.lightest};
  display: none;
  justify-content: flex-start;
  padding: 8px;
  align-items: center;
  z-index: 1;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  max-width: 314px;
  min-width: 240px;
  border-radius: 16px;
  flex-direction: column;
`

const ListMobile = styled(List)`
  width: 100%;

  ${Li} {
    border-bottom: none;
  }
`


export {
  FilterWrapper,
  ChipsWrapper,
  ChipsLabel,
  ChipsIcon,
  Modal,
  ChipsFilters,
  ListMobile,
}