import AssetsAccount from "Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/AssetsAccount";
import LiabilitiesAccount from "Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/LiabilitiesAccount";
import EquityAccount from "Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/EquityAccount";
import RevenuesAccount from "Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/RevenuesAccount";
import ExpensesAccount from "Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/ExpensesAccount";
import AccountsChart from "Contract/CoreConcepts/DoubleEntry/AccountsChart/AccountsChart";

export default class InMemoryAccountsChart implements AccountsChart {
    constructor(
        public readonly assets: AssetsAccount,
        public readonly liabilities: LiabilitiesAccount,
        public readonly equity: EquityAccount,
        public readonly revenues: RevenuesAccount,
        public readonly expenses: ExpensesAccount
    ) {

    }

    getAssets() {
        return this.assets;
    }

    getEquity() {
        return this.equity;
    }

    getLiabilities() {
        return this.liabilities;
    }

    getRevenues() {
        return this.revenues;
    }

    getExpenses() {
        return this.expenses;
    }
}