import { neutrals, secondary } from "assets/colors";
import { Caption } from "assets/styles/default";
import { Chips } from "components/commons";
import { FaXmark } from "react-icons/fa6";
import styled from "styled-components";


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

const ChipsLabel = styled(Caption)`
  font-weight: bold;
`

export {
  Content,
  Badge,
  ChipsIcon,
  ChipsLabel
}