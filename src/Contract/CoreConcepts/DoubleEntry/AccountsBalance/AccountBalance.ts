import { ChartAccount } from "../AccountsChart/Account/ChartAccount";

export default interface AccountBalance<T extends ChartAccount> {
    getChartAccount(): ChartAccount;
    getChildAccountBalances(): AccountBalance<T>[];
    getBalance(): number;
    getDebit(): number;
    getCredit(): number;
}