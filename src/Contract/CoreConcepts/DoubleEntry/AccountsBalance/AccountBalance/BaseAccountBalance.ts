interface BaseAccountBalance {
    getChartAccount(): ChartAccount;
    getChildAccountBalance(): BaseAccountBalance[];
    getBalance(): Number;
    getDebit(): Number;
    getCredit(): Number;
}