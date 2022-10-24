import styled from "styled-components";

export const Main = styled.main`
  @import url("https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap");
  width: 100vw;
  height: 100vh;

  background-image: url("/port.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 200px;
`;

export const Port = styled.div`
  margin-left: 150px;
  margin-top: 100px;

  h2 {
    color: white;
    @import url("https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap");
    font-family: "Dosis", sans-serif;
    font-size: 2.5rem;
    font-weight: 500;
  }
`;

export const List = styled.ul`
  margin-top: 20px;
  padding-left: 15px;
  list-style: none;
  border-left: 3px solid #ffc600;

  li {
    position: relative;
    z-index: 0;
    color: white;
    margin-bottom: 5px;
    font-family: "Dosis", sans-serif;
    padding: 5px;
  }

  li:hover {
    transition: all 0.8s ease-in-out 0s;
    width: calc(100%);
    background: #f0a830;
  }
`;
