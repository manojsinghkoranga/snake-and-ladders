import styled from "styled-components";
import Board from "./components/Board";
import { useState } from "react";
import StartWindow from "./components/start";

function App() {
  const [start, setStart] = useState(false);

  return (
    <Container>
      {!start && <StartWindow start={start} setStart={setStart} />}
      {start && <Board start={start} setStart={setStart} />}
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("images/backgroundimagecopy.jpg");
  background-size: cover;
  background-position: center;
`;

export default App;
