interface ExpensesAccountBalance extends BaseAccountBalance {
    getChartAccount(): ExpensesAccount;
    getChildAccountBalance(): ExpensesAccountBalance[];
}