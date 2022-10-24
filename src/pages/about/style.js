import styled from "styled-components";

export const About = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap");
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;

  background-image: url("/about.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 200px;

  .avatar {
    width: 400px;
    height: 400px;

    border: 1px solid #ffc600;
    border-radius: 50%;
  }
`;

export const Div = styled.div`
  width: 400px;
  height: 500px;

  color: white;

  h2 {
    font-family: "Dosis", sans-serif;
    margin-bottom: 20px;
    font-size: 2rem;
  }

  p {
    font-family: "Dosis", sans-serif;
    margin-top: 20px;
    font-size: 1.5rem;
    font-weight: 100;
  }
`;
