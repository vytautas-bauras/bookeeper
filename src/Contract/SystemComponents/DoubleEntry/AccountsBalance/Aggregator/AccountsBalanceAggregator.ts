import ChartAccount from "../../../../CoreConcepts/DoubleEntry/AccountsChart/ChartAccount";

export default interface AccountsBalanceAggregator {
    getAccountBalanceSum(accounts: ChartAccount[]): number;
}