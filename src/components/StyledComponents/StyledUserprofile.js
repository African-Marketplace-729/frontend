import styled from "styled-components";

const StyledUserProfile = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 50%;
  margin: 0 auto;
  background-color: #e84c3d;
  padding: 0.2rem;
  border-radius: 0.2rem;

  form {
    width: 90%;
  }

  h2 {
    font-size: 2.4rem;
    text-align: center;
  }

  #location-holder {
    display: flex;
    justify-content: center;
  }
  #location-holder label {
    font-size: 1.2rem;
    margin-bottom: 0.2rem;
    padding: 0 0.5rem 0 0.5rem;
  }
  #location-holder input {
    width: 35%;
    padding: 0.4rem;
    font-size: 1.2rem;
    border-radius: 0.2rem;
    background-color: #f3f3f3;
  }
  .form-field {
    min-width: 80%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 0.5rem auto 1rem auto;

    label {
      width: 40%;
      font-size: 1.2rem;
      margin-bottom: 0.2rem;
      padding: 0 0.5rem 0 0.5rem;
    }
    input {
      width: 50%;
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
        color: lightgrey;
        cursor: default;
      }
    }

    p {
      color: #f3f3f3;
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

  @media (max-width: 800px) {
    min-width: 80%;
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

export default StyledUserProfile;
