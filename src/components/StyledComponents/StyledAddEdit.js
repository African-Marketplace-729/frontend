import styled from "styled-components";

const StyledAddEdit = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 60%;
  margin: 0 auto;
  background-color: #e84c3d;
  padding: 1rem;
  border-radius: 0.2rem;
  box-shadow: 2px 2px rgb(29, 33, 33, 0.5);
  color: #1d2121;

  h2 {
    font-size: 2.4rem;
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
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem 0 0 0;
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
