import AccountsChart from "Contract/CoreConcepts/DoubleEntry/AccountsChart/AccountsChart";
import InMemoryLiabilitiesAccount from "./InMemoryLiabilitiesAccount";
import InMemoryEquityAccount from "./InMemoryEquityAccount";
import InMemoryRevenuesAccount from "./InMemoryRevenuesAccount";
import InMemoryExpensesAccount from "./InMemoryExpensesAccount";
import InMemoryAssetsAccount from "./InMemoryAssetsAccount";
import { ChartAccountType } from "Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";
import BaseInMemoryAccount from "./BaseInMemoryAccount";

export default class InMemoryAccountsChart implements AccountsChart {
    constructor(
        public readonly assets: InMemoryAssetsAccount,
        public readonly liabilities: InMemoryLiabilitiesAccount,
        public readonly equity: InMemoryEquityAccount,
        public readonly revenues: InMemoryRevenuesAccount,
        public readonly expenses: InMemoryExpensesAccount
    ) {

    }

    getRootAccountByType(accountType: ChartAccountType) {
        if(accountType === ChartAccountType.Assets) {
            return this.assets;
        } else if(accountType === ChartAccountType.Equity) {
            return this.equity;
        } else if(accountType === ChartAccountType.Liabilities) {
            return this.liabilities;
        } else if(accountType === ChartAccountType.Revenues) {
            return this.revenues;
        } else if(accountType === ChartAccountType.Expenses) {
            return this.expenses;
        }
    }
}