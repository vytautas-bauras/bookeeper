class AccountNameMap {
    accountsMap: {[name: string]: ChartAccount} = {};

    constructor(accountsChart: AccountsChart) {

    }

    private addAccountsRecursive(account: ChartAccount) {
        this.accountsMap[account.getAccountName()] = account;

        account.getChildAccounts().forEach(child => this.addAccountsRecursive(child));
    }

    getAccountByName(accountName: string) {
        const account = this.accountsMap[accountName];
        if(!account) {
            throw new AccountNotFoundError();
        }

        return account;
    }
}