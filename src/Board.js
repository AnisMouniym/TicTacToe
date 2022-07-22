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

// *******************HANDLECLICK*********************

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
        let icon = this.state.xIsNext ? 'X' : 'O'
        iconColor()

// *******************WINNER STATUS***********************
                                                        //
        if (winner) {                                   //
            status = 'THE WINNER IS: '                  //
            icon = winner                               //
            iconColor()                                 //
        } else if (playCount === 9) {                   //
            status = "IT'S A DRAW !"                    //
            icon = ''                                   //
        }                                               //
        else {                                          //
            status = 'Next player : ';                  //
        }                                               //
// *******************************************************
        return (
            <div>
                <div className="status">{status}</div>
                <span className="icon" 
                style={{color: iconColor(icon)}}>
                    {icon}
                </span>

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

                <div>
                    <button id='reload' onClick={refreshPage}>RELOAD</button>
                </div>

            </div>
            )
    }
}


// *******************ICON COLOR*********************
function iconColor(icon) {
    if (icon === 'O') {
        return 'red'
    } else {
        return 'blue'
    }
}

// *******************CALCULATE WINNER*********************

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

// *******************REFRESH PAGE*********************

function refreshPage() {
    window.location.reload(false);
}

export default Board