import React from 'react'
import Board from'./Board'
class Tictactoe extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="rejouer" onClick={<Board/>}>Rejouer</div>
                <div className="game-info">
                    <div></div>
                    <ol></ol>
                </div>
            </div>
            )
    }
}

export default Tictactoe