import SampleChartOfAccounts from "../../../AccountsChart/Sample/SampleChartOfAccounts";
import { ChartAccountType } from "../../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";

const accountsChart = SampleChartOfAccounts();

const assetsAccount = accountsChart.getRootAccountByType(ChartAccountType.Assets);
const equityAccount = accountsChart.getRootAccountByType(ChartAccountType.Equity);
const expensesAccount = accountsChart.getRootAccountByType(ChartAccountType.Expenses);

export default function() {
    return {
        [assetsAccount.getAccountCode()]: {
            account: assetsAccount,
            balance: 0,
            credit: 0,
            debit: 0
        },
        [equityAccount.getAccountCode()]: {
            account: equityAccount,
            balance: 0,
            credit: 0,
            debit: 0
        },
        [expensesAccount.getAccountCode()]: {
            account: equityAccount,
            balance: 0,
            credit: 0,
            debit: 0
        }
    }
}