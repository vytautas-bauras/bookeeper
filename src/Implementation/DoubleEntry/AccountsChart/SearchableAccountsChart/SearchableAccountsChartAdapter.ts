class SearchableAccountsChartAdapter implements SearchableAccountsChart {
    accountsMap: {[name: string]: ChartAccount} = {};

    constructor(private accountsChart: AccountsChart) {
        this.addAccountsRecursive(accountsChart.getAssets());
        this.addAccountsRecursive(accountsChart.getEquity());
        this.addAccountsRecursive(accountsChart.getExpenses());
        this.addAccountsRecursive(accountsChart.getLiabilities());
        this.addAccountsRecursive(accountsChart.getRevenues());
    }

    private addAccountsRecursive(account: ChartAccount) {
        this.accountsMap[account.getAccountName()] = account;
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
 
    getAccountByName(accountName: string) {
        const account = this.accountsMap[accountName];
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