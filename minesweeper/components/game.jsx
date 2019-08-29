import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
    this.state = {board: new Minesweeper.Board(20, 50)};
    this.updateGame.bind(this);
  }

  updateGame(tile, reveal) {
    if (reveal){
      tile.toggleFlag();
    }
    else {
      tile.explore();
    }
    //debugger
    this.setState({board: this.state.board});

    if (this.state.board.lost()){
      this.displayModal("lost");
    }

    if (this.state.board.won()) {
      this.displayModal("won");
    }
  }

  displayModal(winLose) {
    const body = document.getElementById("body");
    let modal = document.createElement("div");
    let resetButton = document.createElement("button");
    resetButton.innerHTML = "New Game";
    modal.className = "modal";
    body.append(modal);
    modal.innerHTML = "You " + winLose + ".";
    modal.append(resetButton);
    resetButton.addEventListener("click", this.restartGame.bind(this));
  }

  restartGame() {
    
    this.setState({ board: new Minesweeper.Board(20, 60) });
    
    const body = document.getElementById("body");
    const modals = Array.from(document.getElementsByClassName("modal"));
    modals.forEach((modal) => {
      body.removeChild(modal);
    });
    
  }

  render() {
    return(
      <div>
        <Board board={this.state.board} updateGame={this.updateGame.bind(this)} />
      </div>
    );
  }
}
