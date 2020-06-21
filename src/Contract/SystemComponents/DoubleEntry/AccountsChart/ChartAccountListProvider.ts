interface ChartAccountListProvider {
    getAccountList(): {[accountCode: string]: ChartAccount};
}