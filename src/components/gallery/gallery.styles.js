import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  gap: 24px;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  box-sizing: border-box; 
  flex-wrap: wrap;
  justify-content: flex-start;


  @media (max-width: 1100px) {
    justify-content: center;
  }

  @media (min-width: 1101px) {
  }
`;

export {
  Grid
}