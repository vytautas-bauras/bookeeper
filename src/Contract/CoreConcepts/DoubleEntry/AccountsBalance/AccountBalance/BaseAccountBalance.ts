interface BaseAccountBalance {
    getChartAccount(): ChartAccount;
    getBalance(): Number;
    getDebit(): Number;
    getCredit(): Number;
}