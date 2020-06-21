export default interface WritableLedger extends Ledger {
    addLedgerTransaction(tx: LedgerTransaction): LedgerTransaction;
    removeLedgerTransaction(tx: LedgerTransaction): void;
}