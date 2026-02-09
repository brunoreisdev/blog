import { neutrals, secondary } from "assets/colors";
import styled from "styled-components";
import { Chips } from "../../../chips/chips.component";

const CardBodyWrapper = styled.div`
  width: 314px;
  height: 229px;
  display: flex;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
  border: solid 1px ${neutrals.extraLight};
  border-top: none;
  border-radius: 0px 0px 8px 8px;
  box-sizing: border-box;
  flex-direction: column;
`;

const DateAndAuthorWrapper = styled.div`
  width: 214px;
  height: 19px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-items: center;
  font: caption;
`;

const Circle = styled.div`
  color: ${secondary.medium};
`;

const BodyContent = styled.div`
  width: auto;
  height: 114px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
  gap: 8px;
  box-sizing: border-box;
`;

const Title = styled.h3`
  margin: 0;
  max-height: 54px;
`;

const Text = styled.small`
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  `;

const ChipsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

const ChipsCard = styled(Chips)`
  background-color: ${neutrals.lightest};
`

export {
  CardBodyWrapper,
  DateAndAuthorWrapper,
  Circle,
  BodyContent,
  Title,
  Text,
  ChipsContainer,
  ChipsCard
}