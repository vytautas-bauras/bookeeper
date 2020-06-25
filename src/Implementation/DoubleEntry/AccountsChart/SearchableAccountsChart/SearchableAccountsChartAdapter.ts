import AccountNotFoundError from "./AccountNotFoundError";
import SearchableAccountsChart from "../../../../Contract/SystemComponents/DoubleEntry/AccountsChart/SearchableAccountsChart";
import { ChartAccountList } from "../../../../Contract/SystemComponents/DoubleEntry/AccountsChart/ChartAccountListProvider";
import { ChartAccountType } from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";
import AccountsChart from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/AccountsChart";
import ChartAccount from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccount";

export default class SearchableAccountsChartAdapter implements SearchableAccountsChart {
    private accountsMap: ChartAccountList = {};

    constructor(private accountsChart: AccountsChart) {
        this.addAccountsRecursive(accountsChart.getRootAccountByType(ChartAccountType.Assets));
        this.addAccountsRecursive(accountsChart.getRootAccountByType(ChartAccountType.Liabilities));
        this.addAccountsRecursive(accountsChart.getRootAccountByType(ChartAccountType.Equity));
        this.addAccountsRecursive(accountsChart.getRootAccountByType(ChartAccountType.Revenues));
        this.addAccountsRecursive(accountsChart.getRootAccountByType(ChartAccountType.Expenses));
    }

    private addAccountsRecursive(account: ChartAccount) {
        this.accountsMap[account.getAccountCode()] = account;
        account.getChildAccounts().forEach(child => this.addAccountsRecursive(child));
    }

    getRootAccountByType(accountType: ChartAccountType) {
        return this.accountsChart.getRootAccountByType(accountType);
    }
 
    getAccountByCode(accountCode: string) {
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