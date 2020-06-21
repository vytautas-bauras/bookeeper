import TemporaryLedgerAccountBalance from "./TemporaryLedgerAccountBalance";
import { ChartAccount } from "Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/ChartAccount";
import AccountBalance from "Contract/CoreConcepts/DoubleEntry/AccountsBalance/AccountBalance";

export default class CalculatedLedgerAccountBalance<T extends ChartAccount> implements AccountBalance<T> {
    constructor(
        protected temporaryBalance: TemporaryLedgerAccountBalance<T>, 
        protected childAccountBalances: CalculatedLedgerAccountBalance<T>[]
    ) {

    }

    getChartAccount(): T {
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

    getChildAccountBalances(): CalculatedLedgerAccountBalance<T>[] {
        return this.childAccountBalances;
    }
}