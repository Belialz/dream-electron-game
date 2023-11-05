import React, { Component } from "react";
import styled from 'styled-components';
import 'app/styles';

const Container = styled.div`
    grid-area: menu;
    display: flex;
    flex-direction: column;
    padding: 5px 0;
    -webkit-app-region: drag;
    padding: 50px 0 10px 0;
    border-right: 1px solid var(--color-gray-400);
    box-shadow: inset -10px 0 8px -10px rgba(0,0,0,0.04);
`;


class App extends Component {

  render(): JSX.Element {
  return (
    <Container id="menu">
      <h1>Dream Electron Game</h1>
      <ul>
          <li><a href="#">New Game</a></li>
          <li><a href="#">Load Game</a></li>
          <li><a href="#">Options</a></li>
          <li><a href="#">Exit</a></li>
      </ul>
      </Container>
  )
}
}

export default App;