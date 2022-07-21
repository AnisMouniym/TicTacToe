import React from 'react'
import Square from './Square'
let playCount = 0
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice()
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({ squares: squares, xIsNext: !this.state.xIsNext})
        playCount++
    }

    renderSquare(i) {
        return (
        <Square 
        value = {this.state.squares[i]}
        onClick={() => this.handleClick(i)}
         />
        )
    }
    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        let col
        let icon = this.state.xIsNext ? 'X' : 'O'

        if (icon === 'O') {
            col = 'red'
        } else {
            col = 'blue'
        }

        if (winner) {
            status = 'THE WINNER IS: '
            icon = winner
        } else if (playCount === 9) {
            status = "IT'S A DRAW !"
            icon = ''
        }
        else {
            status = 'Next player : ';
        }

        return (
            <div>
                <div className="status">{status}</div>
                <span className="icon" style={{color: col}}>{icon}</span>
                <div className="board-row" id='top'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
            )
    }
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
export default Board