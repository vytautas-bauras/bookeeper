import SearchableAccountsChart from "Contract/SystemComponents/DoubleEntry/AccountsChart/SearchableAccountsChart";
import { ChartAccount } from "Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/ChartAccount";
import AccountsChart from "Contract/CoreConcepts/DoubleEntry/AccountsChart/AccountsChart";
import AccountNotFoundError from "./AccountNotFoundError";

export default class SearchableAccountsChartAdapter implements SearchableAccountsChart {
    accountsMap: {[name: string]: ChartAccount} = {};

    constructor(private accountsChart: AccountsChart) {
        this.addAccountsRecursive(accountsChart.getAssets());
        this.addAccountsRecursive(accountsChart.getEquity());
        this.addAccountsRecursive(accountsChart.getExpenses());
        this.addAccountsRecursive(accountsChart.getLiabilities());
        this.addAccountsRecursive(accountsChart.getRevenues());
    }

    private addAccountsRecursive(account: ChartAccount) {
        this.accountsMap[account.getAccountCode()] = account;
        account.getChildAccounts().forEach(child => this.addAccountsRecursive(child));
    }

    getAssets() {
        return this.accountsChart.getAssets();
    }

    getEquity() {
        return this.accountsChart.getEquity();
    }

    getLiabilities() {
        return this.accountsChart.getLiabilities();
    }

    getExpenses() {
        return this.accountsChart.getExpenses();
    }

    getRevenues() {
        return this.accountsChart.getRevenues();
    }
 
    getAccountByName(accountCode: string) {
        const account = this.accountsMap[accountCode];
        if(!account) {
            throw new AccountNotFoundError();
        }

        return account;
    }

    getAccountList() {
        return {
            ...this.accountsMap
        };
    }
}