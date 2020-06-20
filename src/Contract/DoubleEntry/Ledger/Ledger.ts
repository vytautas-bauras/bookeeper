interface Ledger {
    getAccountsChart(): AccountsChart;
    getLedgerTransactionsOrderedByDateAsc(): LedgerTransaction[];
}