import TemporaryLedgerAccountBalance from "./TemporaryLedgerAccountBalance";
import AccountBalance from "../../../../../Contract/CoreConcepts/DoubleEntry/AccountsBalance/AccountBalance";

export default class CalculatedLedgerAccountBalance implements AccountBalance {
    constructor(
        protected temporaryBalance: TemporaryLedgerAccountBalance, 
        protected childAccountBalances: CalculatedLedgerAccountBalance[]
    ) {

    }

    getChartAccount() {
        return this.temporaryBalance.account;
    }

    getBalance() {
        return this.temporaryBalance.balance;
    }

    getCredit() {
        return this.temporaryBalance.credit;
    }

    getDebit() {
        return this.temporaryBalance.debit;
    }

    getChildAccountBalances(): CalculatedLedgerAccountBalance[] {
        return this.childAccountBalances;
    }
}