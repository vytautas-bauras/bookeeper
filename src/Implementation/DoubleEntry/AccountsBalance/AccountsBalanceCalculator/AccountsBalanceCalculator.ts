class AccountsBalanceCalculator {
    private scratchFactory: TemporaryAccountsBalanceMapInitializer;

    constructor(
        private searchableAccountsChart: SearchableAccountsChart
    ) {
        this.scratchFactory = new TemporaryAccountsBalanceMapInitializer(searchableAccountsChart);
    }

    /**
     * Processes transactions and provides a read-only calculated balance of all accounts
     * 
     * @param transactions 
     */
    calculateAccountsBalance(transactions: LedgerTransaction[]) {
        const scratch = this.scratchFactory.initializeTemporaryAccountsBalanceMap();
        const processor = new AccountsBalanceLedgerTransactionProcessor(scratch);
        processor.processTransactions(transactions);
        
        return new ReadOnlyLedgerAccountsBalanceAdapter(this.searchableAccountsChart, scratch);
    }
}