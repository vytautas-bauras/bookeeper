interface BaseAccountBalance {
    getChartAccount(): ChartAccount;
    getDirectBalance(): Number;
    getChildBalance(): Number;
    getTotalBalance(): Number;
}