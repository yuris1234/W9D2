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
  }
  
  handleClick(e) {
    
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;