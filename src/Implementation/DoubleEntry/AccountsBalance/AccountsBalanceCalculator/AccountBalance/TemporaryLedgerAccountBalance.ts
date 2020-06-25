import ChartAccount from "../../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccount";

export default interface TemporaryLedgerAccountBalance {
    account: ChartAccount;
    debit: number;
    credit: number;
    balance: number;
}