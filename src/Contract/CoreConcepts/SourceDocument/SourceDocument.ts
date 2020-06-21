import LedgerTransaction from "../DoubleEntry/Ledger/LedgerTransaction";

export default interface SourceDocument {
    getLedgerTransactions(): LedgerTransaction[];
}