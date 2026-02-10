import styled from "styled-components";

const H1 = styled.h1`
  font-size: 56px;
  font-weight: bold;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
`;

const H2 = styled.h2`
  font-size: 36px;
  line-height: 130%;
  font-weight: bold;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
`;

const H3 = styled.h3`
  font-size: 20px;
  line-height: 130%;
  font-weight: bold;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
`;

const Large = styled.p`
  font-size: 16px;
  line-height: 150%;
  font-weight: 400;
  margin: 0;
`;

const Small = styled.small`
  font-size: 14px;
  line-height: 150%;
  font-weight: 400;
  margin: 0;
`;

const Caption = styled.label`
  font-size: 12px;
  line-height: 150%;
  font-weight: 400;
  margin: 0;
`;

const Container = styled.div`
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  padding: 0 16px; 

  @media (max-width: 600px) {
    padding: 0 8px; 
  }
`;

export {
  H1,
  H2,
  H3,
  Large,
  Small,
  Caption,
  Container
}