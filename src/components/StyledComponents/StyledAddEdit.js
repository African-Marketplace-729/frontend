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
`;

export default StyledAddEdit;
