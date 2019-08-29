import React from 'react';
import * as Minesweeper from '../minesweeper';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) { 
    //debugger;
    
    this.props.updateGame(this.props.mTile, false);
    
  }

  handleFlag(e) {
    //debugger;
    
    this.props.updateGame(this.props.mTile, true);
    e.stopPropagation();
    e.preventDefault();
  }

  render() {
    let tile = this.props.mTile;
    
    if (!tile.explored){
      let mark = ' ';
      if (tile.flagged){
        mark = '\u{1F6A9}';
      }
      return (
        <div className="tile" onAuxClick={(e) => this.handleFlag(e)} onClick={(e) => this.handleClick(e)}>
          <center>{mark}</center>
        </div>
      );
    }
    
    let mark = ' ';
    if (tile.adjacentBombCount() > 0) {
      mark = tile.adjacentBombCount();
    }

    if (tile.bombed) {
      mark = '\u{1F4A3}';
    }
    let divStyle = {
      color: 'black'
    };
    if (tile.adjacentBombCount() === 1){
      divStyle = {
        color: 'blue'
      };
    }
    if (tile.adjacentBombCount() === 2) {
      divStyle = {
        color: 'green'
      };
    }
    if (tile.adjacentBombCount() === 3) {
      divStyle = {
        color: 'red'
      };
    }
    if (tile.adjacentBombCount() === 4) {
      divStyle = {
        color: 'purple'
      };
    }
    if (tile.adjacentBombCount() === 5) {
      divStyle = {
        color: 'maroon'
      };
    }
    if (tile.adjacentBombCount() === 6) {
      divStyle = {
        color: 'turquoise'
      };
    }
    if (tile.adjacentBombCount() === 7) {
      divStyle = {
        color: 'black'
      };
    }
    if (tile.adjacentBombCount() === 8) {
      divStyle = {
        color: 'darkgray'
      };
    }

    return (
      <div style={divStyle} className="tile-revealed"><center>{mark}</center></div>
    );
  }
}
