import AccountBalance from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsBalance/AccountBalance";
import ChartAccount from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccount";

export default class InMemoryAccountBalance implements AccountBalance {
    constructor(
        private chartAccount: ChartAccount,
        private debit: number,
        private credit: number,
        private balance: number,
        private childBalances: InMemoryAccountBalance[]
    ) {

    }

    getChartAccount() {
        return this.chartAccount;
    }

    getDebit() {
        return this.debit;
    }

    getCredit() {
        return this.credit;
    }

    getBalance() {
        return this.balance;
    }

    getChildAccountBalances() {
        return this.childBalances;
    }
}