interface LedgerTransaction extends Validatable {
    getTransactionDate(): Date;
    getTransactionEntries(): LedgerEntry[];
    getTransactionDescription(): string;
}