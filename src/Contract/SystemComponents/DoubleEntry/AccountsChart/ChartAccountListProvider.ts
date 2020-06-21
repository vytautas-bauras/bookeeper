import { ChartAccount } from "Contract/CoreConcepts/DoubleEntry/AccountsChart/Account/ChartAccount";

export type ChartAccountList = {[accountCode: string]: ChartAccount};

export default interface ChartAccountListProvider {
    getAccountList(): ChartAccountList;
}