interface LedgerTransaction extends Validatable {
    getTransactionDate(): Date;
    getTransactionEntries(): LedgerEntry[];
}