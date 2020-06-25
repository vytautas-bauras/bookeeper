import LedgerTransaction from "../../../../Contract/CoreConcepts/DoubleEntry/Ledger/LedgerTransaction";
import LedgerEntry from "../../../../Contract/CoreConcepts/DoubleEntry/Ledger/LedgerEntry";

export default class InMemoryLedgerTransaction implements LedgerTransaction {
    constructor(
        private date: Date,
        private description: string,
        private entries: LedgerEntry[]
    ) {

    }

    getTransactionDate() {
        return this.date;
    }

    getTransactionDescription() {
        return this.description;
    }

    getTransactionEntries() {
        return this.entries;
    }
}