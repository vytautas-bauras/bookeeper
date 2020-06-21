interface EquityAccountBalance extends BaseAccountBalance {
    getChartAccount(): EquityAccount;
    getChildAccountBalance(): EquityAccountBalance[];
}