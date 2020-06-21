import { ChartAccount } from "Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/ChartAccount";
import AccountsChart from "Contract/CoreConcepts/DoubleEntry/AccountsChart/AccountsChart";
import ChartAccountListProvider from "./ChartAccountListProvider";

export default interface SearchableAccountsChart extends AccountsChart, ChartAccountListProvider {
    getAccountByName(accountCode: string): ChartAccount;
}