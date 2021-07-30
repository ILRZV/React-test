import React from "react";
import "../css/style.css";
import Square from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      ></Square>
    );
  }
  handleClick(i) {
    let square = this.state.squares.slice();
    square[i] = "X";

    this.setState({ squares: square });
  }
  render() {
    return (
      <div>
        <span className="next_player_anonce">Next Player</span>
        <div className="board">
          <div className="board_row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board_row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board_row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
