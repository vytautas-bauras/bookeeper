class ReadOnlyLedgerAccountsBalanceAdapter implements AccountsBalance {
    private assets: AccountBalance<AssetsAccount>;
    private equity: AccountBalance<EquityAccount>;
    private revenues: AccountBalance<RevenuesAccount>;
    private liabilities: AccountBalance<LiabilitiesAccount>;
    private expenses: AccountBalance<ExpensesAccount>;

    constructor(
        private accountsChart: AccountsChart,
        private accountBalanceMap: TemporaryAccountBalanceMap
    ) {
        this.assets = this.initLedgerAccountBalanceRecursive(this.accountsChart.getAssets());     
        this.equity = this.initLedgerAccountBalanceRecursive(this.accountsChart.getEquity());
        this.revenues = this.initLedgerAccountBalanceRecursive(this.accountsChart.getRevenues());
        this.liabilities = this.initLedgerAccountBalanceRecursive(this.accountsChart.getLiabilities());
        this.expenses = this.initLedgerAccountBalanceRecursive(this.accountsChart.getExpenses());
    }

    /**
     * Initialize the read-only calculated account balances into a tree
     * 
     * @param account 
     */
    initLedgerAccountBalanceRecursive(account: ChartAccount): CalculatedLedgerAccountBalance<any> {
        const balance = this.accountBalanceMap[account.getAccountCode()];

        return new CalculatedLedgerAccountBalance(
            balance, 
            account.getChildAccounts().map(childAccount => {
                return this.initLedgerAccountBalanceRecursive(childAccount)
            })
        );
    }

    getAssets() {
        return this.assets;
    }

    getEquity() {
        return this.equity;
    }

    getRevenues() {
        return this.revenues;
    }

    getExpenses() {
        return this.expenses;
    }

    getLiabilities() {
        return this.liabilities;
    }
}