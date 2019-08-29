import React from 'react';
import * as Minesweeper from '../minesweeper';
import Tile from './tile';

export default class Board extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <ul>
        {
          this.props.board.grid.map( (row, idx) => {
            return (
              <div className="row" key={idx.toString()}>
                {
                  row.map( (tile, tIdx) => {
                    return(
                      <div key={tIdx.toString()}>
                        <Tile mTile={tile} updateGame={this.props.updateGame}/>
                      </div>
                    );
                  })
                }
              </div>
            );
          })
        }
      </ul>
    );
  }
}