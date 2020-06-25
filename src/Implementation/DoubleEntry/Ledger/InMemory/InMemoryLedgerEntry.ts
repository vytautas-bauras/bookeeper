import ChartAccount from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccount";
import LedgerEntry from "../../../../Contract/CoreConcepts/DoubleEntry/Ledger/LedgerEntry";

export default class InMemoryLedgerEntry implements LedgerEntry {
    constructor(
        private account: ChartAccount,
        private amount: number
    ) {

    }

    getLedgerEntryAccount() {
        return this.account;
    }

    getLedgerEntryAmount() {
        return this.amount;
    }
}