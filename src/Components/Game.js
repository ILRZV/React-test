import React from "react";
import "../css/style.css";
import Board from "./Board";
import Square from "./Square";

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game_board">
          <Board></Board>
        </div>
        <div className="game_info"></div>
      </div>
    );
  }
}

export default Game;
