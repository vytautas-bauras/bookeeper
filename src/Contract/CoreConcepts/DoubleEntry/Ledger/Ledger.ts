interface Ledger {
    getLedgerAccountsChart(): AccountsChart;
    getLedgerTransactionsOrderedByDateAsc(): LedgerTransaction[];
}