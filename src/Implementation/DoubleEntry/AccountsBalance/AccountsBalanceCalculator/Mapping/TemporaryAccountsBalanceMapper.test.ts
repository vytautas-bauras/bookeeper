import tap from "tap";
import TemporaryAccountsBalanceMapper from "./TemporaryAccountsBalanceMapper";
import SampleTemporaryAccountBalanceMap from "../Sample/SampleTemporaryAccountBalanceMap";
import ReadOnlyAccountsBalanceFactory from "../ReadOnlyAccountsBalanceFactory";
import SampleChartOfAccounts from "../../../AccountsChart/Sample/SampleChartOfAccounts";
import SearchableAccountsChartAdapter from "../../../AccountsChart/SearchableAccountsChart/SearchableAccountsChartAdapter";
import AccountsChart from "../../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/AccountsChart";
import InMemoryAccountsChart from "../../../AccountsChart/InMemory/InMemoryAccountsChart";
import InMemoryAssetsAccount from "../../../AccountsChart/InMemory/InMemoryAssetsAccount";
import InMemoryLiabilitiesAccount from "../../../AccountsChart/InMemory/InMemoryLiabilitiesAccount";
import InMemoryEquityAccount from "../../../AccountsChart/InMemory/InMemoryEquityAccount";
import InMemoryRevenuesAccount from "../../../AccountsChart/InMemory/InMemoryRevenuesAccount";
import InMemoryExpensesAccount from "../../../AccountsChart/InMemory/InMemoryExpensesAccount";
import { SerializableMappedAccountsChart } from "../../../AccountsChart/AccountMapping/SerializableMappedAccountsChart";
import { ChartAccountType } from "../../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";

const baseAccountsChart = SampleChartOfAccounts();
const mappings: SerializableMappedAccountsChart = {
    [ChartAccountType.Assets]: {
        accountCode: "A",
        accountTitle: "Assets",
        mappedAccountCodes: [],
        childAccounts: [
            {
                accountCode: "101",
                accountTitle: "Current",
                childAccounts: [],
                mappedAccountCodes: [
                    baseAccountsChart.assets.childAccounts[0].accountCode,
                    baseAccountsChart.assets.childAccounts[1].accountCode
                ]
            }
        ]
    },
    [ChartAccountType.Liabilities]: ,
    [ChartAccountType.Equity]: ,
    [ChartAccountType.Revenues]: ,
    [ChartAccountType.Expenses]:
}

const mapper = new TemporaryAccountsBalanceMapper(scratch);

scra