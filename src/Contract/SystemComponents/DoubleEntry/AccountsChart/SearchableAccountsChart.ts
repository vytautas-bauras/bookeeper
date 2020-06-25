import ChartAccountListProvider from "./ChartAccountListProvider";
import AccountsChart from "../../../CoreConcepts/DoubleEntry/AccountsChart/AccountsChart";
import ChartAccount from "../../../CoreConcepts/DoubleEntry/AccountsChart/ChartAccount";

export default interface SearchableAccountsChart extends AccountsChart, ChartAccountListProvider {
    getAccountByCode(accountCode: string): ChartAccount;
}