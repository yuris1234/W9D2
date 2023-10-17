import View from "./ttt-view.js";
import Game from "../ttt_node/game.js";

window.Game = Game;
window.View = View;
const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  const gridDiv = document.querySelector(".ttt");
  const view = new View(game, gridDiv);
  
  game.run(r1, view.handleGameOver);


});