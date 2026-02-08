import styled from "styled-components";
import { accent, neutrals } from "../../../assets/colors";
import { FaArrowLeft } from "react-icons/fa";
import { FaX } from "react-icons/fa6";


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  background-color: ${neutrals.lightest};
  margin-bottom: 16px;
`

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 8px;
  box-sizing: border-box;
  background-color: ${neutrals.lightest};

`

const ArrowLeftIcon = styled(FaArrowLeft)`
  font-size: 14px;
  color: ${neutrals.darkest};
  cursor: pointer;
`

const ExitIcon = styled(FaX)`
  font-size: 14px;
  color: ${neutrals.light};
  cursor: pointer;
`

const InputWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: solid 1px ${neutrals.extraLight};
  justify-items:center;
  justify-content: center;
  padding: 8px;
  
  &:hover {
    border-color: ${accent.medium};
  }

  &:focus-within {
    border-color: ${accent.medium};
  }
`;


const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 80%;
  color: ${neutrals.extraDark};
  background-color: transparent;
  font-size: 16px;
`;


export {
  InputWrapper,
  SearchInput,
  HeaderContainer,
  Container,
  ArrowLeftIcon,
  ExitIcon
}