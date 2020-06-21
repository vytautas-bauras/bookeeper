import AccountsChart from "../AccountsChart/AccountsChart";
import LedgerTransaction from "./LedgerTransaction";

export default interface Ledger {
    getLedgerAccountsChart(): AccountsChart;
    getLedgerTransactionsOrderedByDateAsc(): LedgerTransaction[];
}