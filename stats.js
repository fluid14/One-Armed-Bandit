class Stats {
    constructor() {
        this.wallet = document.querySelector('p.money span');
        this.winOrLose = document.querySelector('span.win-or-lose');
        this.winNumber = document.querySelector('span.win');
        this.loseNumber = document.querySelector('span.lose');
        this.gameNumber = document.querySelector('span.game');
    }
    display() {
        this.wallet.textContent = game.wallet.getMoney();
        this.winNumber.textContent = game.winNumber;
        this.loseNumber.textContent = game.loseNumber;
        this.gameNumber.textContent = game.gameNumber;
        this.winOrLose.textContent = game.winOrLose;
    }
}