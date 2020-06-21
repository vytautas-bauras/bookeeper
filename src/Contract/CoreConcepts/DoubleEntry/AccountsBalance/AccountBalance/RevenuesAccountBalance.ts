interface RevenuesAccountBalance extends BaseAccountBalance {
    getChartAccount(): RevenuesAccount;
    getChildAccountBalance(): RevenuesAccountBalance[];
}