import InMemoryLiabilitiesAccount from "./InMemoryLiabilitiesAccount";
import InMemoryEquityAccount from "./InMemoryEquityAccount";
import InMemoryRevenuesAccount from "./InMemoryRevenuesAccount";
import InMemoryExpensesAccount from "./InMemoryExpensesAccount";
import InMemoryAssetsAccount from "./InMemoryAssetsAccount";
import NoRootAccountOfSuchTypeInMemoryError from "./NoRootAccountOfSuchTypeInMemoryError";
import AccountsChart from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/AccountsChart";
import ChartAccount from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccount";
import { ChartAccountType } from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";

export default class InMemoryAccountsChart implements AccountsChart {
    constructor(
        public readonly assets: InMemoryAssetsAccount,
        public readonly liabilities: InMemoryLiabilitiesAccount,
        public readonly equity: InMemoryEquityAccount,
        public readonly revenues: InMemoryRevenuesAccount,
        public readonly expenses: InMemoryExpensesAccount
    ) {

    }

    getRootAccountByType(accountType: ChartAccountType): ChartAccount {
        let account: ChartAccount|undefined;

        if(accountType === ChartAccountType.Assets) {
            account = this.assets;
        } else if(accountType === ChartAccountType.Equity) {
            account = this.equity;
        } else if(accountType === ChartAccountType.Liabilities) {
            account = this.liabilities;
        } else if(accountType === ChartAccountType.Revenues) {
            account = this.revenues;
        } else if(accountType === ChartAccountType.Expenses) {
            account = this.expenses;
        }

        if(!account) {
            throw new NoRootAccountOfSuchTypeInMemoryError(accountType);
        }        

        return account;
    }
}