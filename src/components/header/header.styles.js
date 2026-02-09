import styled from "styled-components";
import { neutrals, accent, primary, colorDefault } from "../../assets/colors";
import { FaSearch } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colorDefault};
  padding: 16px;
  box-sizing: border-box;
  margin-bottom: 32px;
  border: solid 1px ${neutrals.extraLight};
`
const HeaderWrapper = styled.header`
  max-width: 1440px;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
`;

const SearchIcon = styled.div`
  background-color: ${primary.light};
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconSearch = styled(FaSearch)`
  size: 18px;
  color: ${neutrals.lightest};
`;

const SearchIconMobile = styled(SearchIcon)`
  display: flex;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  display: none;
  background-color: transparent;
  padding: 8px;
  border-radius: 50px;
  border: solid 1px ${neutrals.extraLight};
  justify-content: space-between;

  @media (min-width: 900px) {
    display: flex;
    width: 500px;
  }

 @media (min-width: 800px) and (max-width: 899px) {
    display: flex;
    width: 400px;
  }

  @media (min-width: 600px) and (max-width: 799px) {
    display: flex;
    width: 300px;
  }

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
  padding: 0 0 0 8px;
  width: 90%;
  color: ${neutrals.extraDark};
  background-color: transparent;
  font-family: 'Open Sans', sans-serif;

  @media (min-width: 600px) and (max-width: 799px) {
    width: 75%;
  }
`;

export {
  HeaderWrapper,
  Logo,
  SearchIcon,
  SearchContainer,
  SearchInput, 
  SearchIconMobile,
  IconSearch,
  Container
}