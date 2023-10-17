class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
  }
  
  setupBoard() {
    const ul = document.createElement("ul");
    ul.dataset.columns = 3;
    ul.dataset.rows = 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const li = document.createElement("li");
        li.dataset.column = j;
        li.dataset.row = i;
        ul.appendChild(li);
      }
    }

    this.el.append(ul);
    this.el.addEventListener("click", e => {
      this.handleClick(e);
    });
  }
  
  handleClick(e) {
    let target = e.target;
    this.makeMove(target);
  }

  makeMove(square) {
    Game.prototype.playMove([square.dataset.row, square.dataset.column]);
    square.dataset.mark = this.game.currentPlayer;
  }
  
  handleGameOver() {
    const h2 = document.createElement("h2");
    h2.innerText = "Congrats, game over!";
    const h1 = document.querySelector("h1");
    h1.append(h2);
  }
}

export default View;