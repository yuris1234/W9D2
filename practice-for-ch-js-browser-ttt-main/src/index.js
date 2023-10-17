import View from "./ttt-view.js";
import Game from "../ttt_node/game.js";

window.Game = Game;
window.View = View;

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  const gridDiv = document.querySelector(".ttt");
  const view = new View(game, gridDiv);
  
});