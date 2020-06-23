import ChartAccount from "../AccountsChart/ChartAccount";

export default interface LedgerEntry {
    getLedgerEntryAccount(): ChartAccount;
    getLedgerEntryAmount(): number;
}