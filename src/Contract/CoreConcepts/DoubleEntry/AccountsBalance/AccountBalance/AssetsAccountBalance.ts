interface AssetsAccountBalance extends BaseAccountBalance {
    getChartAccount(): AssetsAccount;
    getChildAccountBalance(): AssetsAccountBalance[];
}