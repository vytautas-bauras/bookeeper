import tap from "tap";
import InMemoryAccountsBalance from "../InMemory/InMemoryAccountsBalance";
import InMemoryAccountBalance from "../InMemory/InMemoryAccountBalance";
import SampleChartOfAccounts from "../../AccountsChart/Sample/SampleChartOfAccounts";
import RuntimeAccountsBalanceAggregator from "./RuntimeAccountsBalanceAggregator";
import SearchableAccountsChartAdapter from "../../AccountsChart/SearchableAccountsChart/SearchableAccountsChartAdapter";
import { ChartAccountType } from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";

const sampleAccountsChart = new SearchableAccountsChartAdapter(SampleChartOfAccounts());

const accountsBalance = new InMemoryAccountsBalance(
    new InMemoryAccountBalance(
        sampleAccountsChart.getAccountByCode("100"),
        0,
        1000,
        1000,
        [
            new InMemoryAccountBalance(
                sampleAccountsChart.getAccountByCode("101"),
                0,
                200,
                200,
                []
            ),
            new InMemoryAccountBalance(
                sampleAccountsChart.getAccountByCode("120"),
                0,
                342,
                342,
                []
            )
        ]
    ),
    new InMemoryAccountBalance(
        sampleAccountsChart.getRootAccountByType(ChartAccountType.Liabilities),
        0,
        1000,
        1000,
        []
    ),
    new InMemoryAccountBalance(
        sampleAccountsChart.getRootAccountByType(ChartAccountType.Liabilities),
        0,
        1000,
        1000,
        []
    ),
    new InMemoryAccountBalance(
        sampleAccountsChart.getRootAccountByType(ChartAccountType.Liabilities),
        0,
        1000,
        1000,
        []
    ),
    new InMemoryAccountBalance(
        sampleAccountsChart.getRootAccountByType(ChartAccountType.Liabilities),
        0,
        1000,
        1000,
        []
    )
);

const runtimeAccountsBalanceAggregator = new RuntimeAccountsBalanceAggregator(accountsBalance);
tap.equals(runtimeAccountsBalanceAggregator.getAccountBalanceSum([
    sampleAccountsChart.getAccountByCode("100"),
    sampleAccountsChart.getAccountByCode("101"),
    sampleAccountsChart.getAccountByCode("120")
]), 1542);
