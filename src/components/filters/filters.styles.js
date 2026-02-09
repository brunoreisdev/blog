import { colorDefault, neutrals, secondary } from "assets/colors";
import { Chips } from "components/commons";
import { FaXmark } from "react-icons/fa6";
import styled from "styled-components";


const FilterWrapper = styled.div`
  display: none;
  flex-direction: column;
  background-color: ${colorDefault};
  border: solid 1px ${neutrals.extraLight};
  border-radius: 8px;
  padding: 16px 12px;
  box-sizing: border-box;
  gap: 8px;
  margin-bottom: 16px;
  height: min-content;
  max-width: 314px;
  width: 100%;

  @media (min-width: 900px) {
    display: flex;
  }
`;

const Title = styled.div`
  display: flex; 
  gap: 16px;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 16px;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 0;
  border: none;
  background-color: ${secondary.medium};
  color: ${neutrals.lightest};
  border-radius: 50px;

  &:hover {
    background-color: ${secondary.dark};
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
`

const Badge = styled(Chips)`
  background-color: ${neutrals.lightest};
  border: 1px solid ${secondary.medium};
  color: ${secondary.medium};
  padding: 4px 8px;
  gap: 4px;
  cursor: pointer;
  width: auto;
`

const ChipsIcon = styled(FaXmark)`
  color: ${secondary.medium};
  font-size: 14px;
`

export {
  FilterWrapper,
  Title,
  Button,
  Content,
  Badge,
  ChipsIcon
}