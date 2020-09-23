import styled from "styled-components";

const StyledSignIn = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 60%;
  margin: 0 auto;
  background-color: #e84c3d;
  padding: 1rem;
  border-radius: 0.2rem;

  h2 {
    font-size: 2.4rem;
  }

  .form-field {
    min-width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0.5rem auto 1rem auto;

    label {
      font-size: 1.2rem;
      margin-bottom: 0.2rem;
    }
    input {
      width: 100%;
      padding: 0.4rem;
      font-size: 1.2rem;
      border-radius: 0.2rem;
      background-color: #f3f3f3;
    }
  }

  button {
    font-size: 1.2rem;
    padding: 0.4rem;
    color: #f3f3f3;
    background-color: #1d2121;
    cursor: pointer;

    &:disabled {
      font-size: 1.2rem;
      padding: 0.4rem;
      color: lightgrey;
      cursor: default;
    }
  }

  a {
    margin: 1rem;
    text-decoration: none;
    color: #1d2121;
    font-size: 1.2rem;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 550px) {
    min-width: 100%;

    label {
      font-size: 0.8rem;
    }
    input {
      font-size: 0.8rem;
    }
  }
`;

export default StyledSignIn;
