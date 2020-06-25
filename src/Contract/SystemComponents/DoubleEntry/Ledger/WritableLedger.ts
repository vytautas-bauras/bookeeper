import Ledger from "../../../CoreConcepts/DoubleEntry/Ledger/Ledger";
import LedgerTransaction from "../../../CoreConcepts/DoubleEntry/Ledger/LedgerTransaction";

export default interface WritableLedger extends Ledger {
    addLedgerTransaction(tx: LedgerTransaction): LedgerTransaction;
    removeLedgerTransaction(tx: LedgerTransaction): void;
}