import styled from "styled-components";
//#e84c3d;
const StyledAddEdit = styled.div`



  

  @media (max-width: 1050px) {
    .input-container {
      min-width: 90%;
    }
  }

  @media (max-width: 800px) {
    min-width: 80%;
  }

  @media (max-width: 550px) {
    min-width: 100%;

    label {
      font-size: 0.8rem;
    }
    input,
    select,
    textarea {
      min-width: 100%;
      font-size: 0.8rem;
    }
  }
`;

export default StyledAddEdit;