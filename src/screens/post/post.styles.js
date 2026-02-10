import { neutrals, secondary } from "assets/colors";
import { Container, H2, Large, Small } from "assets/styles/default";
import { Chips } from "components/commons";
import { Grid } from "components/gallery/gallery.styles";
import { FaArrowLeft } from "react-icons/fa6";
import styled from "styled-components";

const PostContainer = styled(Container)`
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  gap: 56px;
  margin-bottom: 56px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
  }
`

const ChipsBackButton = styled(Chips)`
  background-color: ${neutrals.lightest};
  border: 1px solid ${secondary.medium};
  color: ${secondary.medium};
  padding: 4px 8px;
  gap: 4px;
  align-items: center;
  width: min-content;
  cursor: pointer;

  &:hover, &::selection {
    background-color: ${secondary.mediumOpacity};
    color: ${secondary.medium};
  }

`

const ChipsLabel = styled(Small)`
  font-weight: bold;
`

const ChipsIcon = styled(FaArrowLeft)`
  color: ${secondary.medium};
  font-size: 16px;
`

const UserWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 70%;

  ${Grid} {
    justify-content: flex-start;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;    
  }

  @media (max-width: 500px) {
    ${Grid} {
      justify-content: center;
    }
  }
`

const ImageWrapper = styled.div`
  display: flex;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  box-sizing: border-box;
`

const Picture = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
`

const PostInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const DateText = styled(Small)`
  color: ${neutrals.dark};
`

const FeaturedImage = styled.img`
  width: 100%;
  height: 350px;
  border-radius: 16px;

  @media (max-width: 768px) {
    height: 300px;
  }
`

const Text = styled(Large)`
 white-space: pre-line;
`

const Divisor = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${neutrals.extraLight};
  margin: 16px 0;
` 

const LatestLabel = styled(H2)`
  font-weight: 500;
`

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export {
  PostContainer,
  ChipsBackButton,
  ChipsIcon,
  ChipsLabel,
  Content,
  UserWrapper,
  ImageWrapper,
  Picture,
  PostInformation,
  DateText,
  FeaturedImage,
  Text,
  Divisor,
  LatestLabel,
  Loading
}