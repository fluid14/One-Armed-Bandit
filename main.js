const game = new Game();
const stats = new Stats();
stats.display();

game.startBtn.addEventListener('click', function () {
    game.render();
    stats.display();
})