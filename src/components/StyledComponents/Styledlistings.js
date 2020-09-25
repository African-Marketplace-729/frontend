import styled from "styled-components";

const Styledlistings = styled.form`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  max-width: 60%;
  margin: .5rem auto;
  background-color: #e84c3d;
  padding: .1rem;
  border-radius: 0.5rem;
  .data{
      flex-direction:column;
  }
  h2 {
    font-size: 1.6rem;

  }

    p {
        text-align:center;
    font-weight:bold;
      font-size:1.2rem;  
      color: #f3f3f3;
    }
  }



  @media (max-width: 800px) {
    min-width: 80%;
  }

  @media (max-width: 550px) {
    min-width: 100%;

    h2 {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

export default Styledlistings;
