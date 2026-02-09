import { neutrals } from "assets/colors";
import { Large, Small } from "assets/styles/default";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`

const ListWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0;
  margin: 0 0 18px 0;
`

const Li = styled(Small)`
  display: flex;
  border-bottom: solid 1px ${neutrals.extraLight};
  justify-content: flex-start;
  padding: 4px 0;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: ${neutrals.extraLight};
  }
`

const LargeSemiBold = styled(Large)`
  font-size: 16px;
  font-weight: 600;
  display: flex;
  margin-bottom: 8px;
`

export {
  Section,
  ListWrapper,
  Li,
  LargeSemiBold
}