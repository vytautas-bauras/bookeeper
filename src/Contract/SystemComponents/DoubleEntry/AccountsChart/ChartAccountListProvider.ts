interface ChartAccountListProvider {
    getAccountList(): {[accountName: string]: ChartAccount};
}