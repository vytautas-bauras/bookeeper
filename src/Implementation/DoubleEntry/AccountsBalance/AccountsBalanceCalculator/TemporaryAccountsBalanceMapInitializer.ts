type TemporaryAccountBalanceMap = {[accountName: string]: TemporaryLedgerAccountBalance<any>};

class TemporaryAccountsBalanceMapInitializer {
    constructor(protected searchableAccountsChart: SearchableAccountsChart) {

    }

    initializeTemporaryAccountsBalanceMap(): TemporaryAccountBalanceMap {
        const accountList = this.searchableAccountsChart.getAccountList();

        const accountsBalance: TemporaryAccountBalanceMap = {};

        Object.keys(accountList).forEach(accountName => {
            accountsBalance[accountName] = {
                account: accountList[accountName],
                debit: 0,
                credit: 0,
                balance: 0
            }
        });

        return accountsBalance;
    }
}