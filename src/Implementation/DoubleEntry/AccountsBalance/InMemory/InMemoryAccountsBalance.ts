import AccountsBalance from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsBalance/AccountsBalance";
import { ChartAccountType } from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";
import AccountBalance from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsBalance/AccountBalance";
import NoRootAccountBalanceOfSuchTypeInMemoryError from "./NoRootAccountBalanceOfSuchTypeInMemoryError";

export default class InMemoryAccountsBalance implements AccountsBalance {
    constructor(
        private assets: AccountBalance,
        private liabilities: AccountBalance,
        private equity: AccountBalance,
        private revenues: AccountBalance,
        private expenses: AccountBalance
    ) {

    }

    getRootBalanceByAccountType(accountType: ChartAccountType) {
        let balance: AccountBalance|undefined;

        if(accountType === ChartAccountType.Assets) {
            balance = this.assets;
        } else if(accountType === ChartAccountType.Equity) {
            balance = this.equity;
        } else if(accountType === ChartAccountType.Liabilities) {
            balance = this.liabilities;
        } else if(accountType === ChartAccountType.Revenues) {
            balance = this.revenues;
        } else if(accountType === ChartAccountType.Expenses) {
            balance = this.expenses;
        }

        if(!balance) {
            throw new NoRootAccountBalanceOfSuchTypeInMemoryError(accountType);
        }        

        return balance;
    }
}