const root = document.getElementsByClassName('menu')

const App = () => {
  return (
    
      <h1>Dream Electron Game</h1>
      <ul>
          <li><a href="#">New Game</a></li>
          <li><a href="#">Load Game</a></li>
          <li><a href="#">Options</a></li>
          <li><a href="#">Exit</a></li>
      </ul>
  
  )
}

ReactDOM.render(<App />, root)