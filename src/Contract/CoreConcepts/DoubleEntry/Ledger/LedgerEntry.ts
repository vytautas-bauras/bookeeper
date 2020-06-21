import { ChartAccount } from "../AccountsChart/Account/ChartAccount";

export default interface LedgerEntry {
    getLedgerEntryAccount(): ChartAccount;
    getLedgerEntryAmount(): number;
}