/**
 * 
 */
export default interface TemporaryLedgerAccountBalance<T extends ChartAccount> {
    account: T;
    debit: number;
    credit: number;
    balance: number;
}