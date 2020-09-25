import styled from "styled-components";

const StyledPriceCheck = styled.form`
  #filter {
    display: flex;
    justify-content: space-evenly;
  }
  #filter label {
    background-color: #e84c3d;
    width: 15%;
    border-radius: 0.5rem;
    text-align: center;
    font-weight: bold;
  }
  #filter label select {
    width: 100%;
  }
  @media (max-width: 800px) {
    min-width: 80%;
    #filter label {
      width: 30%;
    }
  }

  @media (max-width: 550px) {
    min-width: 100%;
    #filter label {
      width: 30%;
    }
  }
`;
export default StyledPriceCheck;
