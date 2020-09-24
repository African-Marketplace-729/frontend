import styled from "styled-components";
//#e84c3d;
const StyledAddEdit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 35%;
  margin: 1rem auto;
  background-color: #1d2121;
  padding: 0.25rem;
  border-radius: 0.2rem;
  box-shadow: 0px 0px 2px 4px rgb(29, 33, 33, 0.5);
  color: #f3f3f3;

  h4 {
    font-size: 1.8rem;
  }

  .input-container {
    min-width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0.5rem auto 1rem auto;

    label {
      font-size: 1.2rem;
      margin-bottom: 0.2rem;
    }
    input,
    select,
    textarea {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
      width: 100%;
      padding: 0.4rem;
      font-size: 1.2rem;
      border-radius: 0.2rem;
      background-color: #f3f3f3;
    }
  }

  .btn-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      font-size: 1.2rem;
      padding: 0.4rem;
      color: #f3f3f3;
      background-color: #1d2121;
      cursor: pointer;

      &:disabled {
        font-size: 1.2rem;
        padding: 0.4rem;
        color: darkgrey;
        cursor: default;
      }
    }
    p {
      color: #f3f3f3;
    }
  }

  div {
    font-size: 1.6rem;
    font-weight: bold;
    margin: 0.5rem 0 0 0;
  }

  h4 {
      text-align: center;
      box-shadow: 0px 0px 2px 2px rgb(29, 33, 33, 0.5);
      background-color: #e84c3d;
      color: #f3f3f3;
  }
  .listing-header{
      font-size: 1.8rem;
      text-align: center;
      box-shadow: 0px 0px 2px 2px rgb(29, 33, 33, 0.5);
      background-color: #e84c3d;
      color: #f3f3f3;
  }

  .description {
      font-size: 1.2rem;
  }
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