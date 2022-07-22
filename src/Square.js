import React from 'react';

function Square(props) {
  let col

  if (props.value === 'O') {
      col = 'red'
  } else {
      col = 'blue'
  }
    return (
      <button className="square" onClick={props.onClick} style={{color: col}} >
        {props.value}
      </button>
    );
}

export default Square
