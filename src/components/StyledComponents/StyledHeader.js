import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #1d2121;
  width: 100%;
  padding: 1.25rem;
  margin-top: 1%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    width: 30%;
  }

  nav {
    display: flex;
    width: 30%;
    justify-content: space-evenly;

    a {
      color: #f3f3f3;
      font-size: 0.9375rem;
      text-decoration: none;
      padding: 0.5rem;

      &:hover {
        background-color: #e84c3d;
        color: #1d2121;
        border-radius: 8px;
        transition: 0.3s;
        text-align: center;
      }
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;

    img {
      width: 80%;
      margin-bottom: 2rem;
    }

    nav {
      width: 60%;
    }
  }

  @media (max-width: 500px) {
    img {
      width: 100%;
    }

    nav {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default StyledHeader;
