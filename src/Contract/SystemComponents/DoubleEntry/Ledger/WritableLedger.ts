import Ledger from "Contract/CoreConcepts/DoubleEntry/Ledger/Ledger";
import LedgerTransaction from "Contract/CoreConcepts/DoubleEntry/Ledger/LedgerTransaction";

export default interface WritableLedger extends Ledger {
    addLedgerTransaction(tx: LedgerTransaction): LedgerTransaction;
    removeLedgerTransaction(tx: LedgerTransaction): void;
}