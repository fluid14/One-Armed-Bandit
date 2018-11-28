class Game {
    constructor() {
        this.gameNumber = 0;
        this.winNumber = 0;
        this.loseNumber = 0;
        this.startMoney = 200;
        this.startBtn = document.querySelector('.start-btn');
        this.betValue = document.querySelector('input').value;
        this.userWin;
        this.wallet = new Wallet(this.startMoney);
        this.draw = new Draw();
    }
    win() {
        if (this.draw.drawnColors[0] === this.draw.drawnColors[1] && this.draw.drawnColors[1] === this.draw.drawnColors[2]) {
            this.userWin = true;
            this.winNumber++;
            this.winOrLose = "Wygrałeś!"
        } else {
            this.userWin = false;
            this.loseNumber++;
            this.winOrLose = "Przegrałeś!"
        }
    }
    render() {
        this.wallet.bet = document.querySelector('input').value;
        if (this.wallet.amountMoney()) {
            this.draw.drawElements();
            this.draw.displayColors();
            this.win();
            this.wallet.editMoney(this.wallet.winMoney(this.userWin));
            this.gameNumber++;
        }

        if (this.wallet.getMoney() <= 0) {
            alert("Przegrałeś! Zacznij od nowa")
            this.wallet = new Wallet(this.startMoney);
            this.gameNumber = 0;
            this.winNumber = 0;
            this.loseNumber = 0;
            this.winOrLose = '';
            return 0;
        }
    }
}