class Wallet {
    constructor(money) {
        let _money = money;
        this.bet;
        this.getMoney = () => _money;
        this.editMoney = (money) => {
            return _money += money;
        }
    }

    winMoney(userWin) {
        if (userWin) {
            return +this.bet * 3;
        } else {
            return -this.bet;
        }
    }

    amountMoney() {
        if (this.bet > this.getMoney()) {
            alert("Nie masz tylu pieniędzy!");
            return 0;
        } else if (this.bet <= 0) {
            alert("Wartośc musi byc większa od 0!");
            return 0;
        } else {
            return 1;
        }

    }
}