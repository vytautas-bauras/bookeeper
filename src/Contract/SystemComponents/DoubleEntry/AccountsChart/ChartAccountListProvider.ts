import ChartAccount from "../../../CoreConcepts/DoubleEntry/AccountsChart/ChartAccount";

export type ChartAccountList = {[accountCode: string]: ChartAccount};

export default interface ChartAccountListProvider {
    getAccountList(): ChartAccountList;
}