import ChartAccount from "../AccountsChart/ChartAccount";

export default interface AccountBalance {
    getChartAccount(): ChartAccount;
    getChildAccountBalances(): AccountBalance[];
    getBalance(): number;
    getDebit(): number;
    getCredit(): number;
}