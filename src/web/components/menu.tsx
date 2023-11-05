
import "./menu.css";

export const Menu = () => {

  return (
    <div className="menu">
        <h1>Game Menu</h1>
        <ul>
            <li><a href="#">New Game</a></li>
            <li><a href="#">Load Game</a></li>
            <li><a href="#">Options</a></li>
            <li><a href="#">Exit</a></li>
        </ul>
    </div>
  );
};