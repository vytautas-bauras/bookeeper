type ChartAccountList = {[accountCode: string]: ChartAccount};

interface ChartAccountListProvider {
    getAccountList(): ChartAccountList;
}