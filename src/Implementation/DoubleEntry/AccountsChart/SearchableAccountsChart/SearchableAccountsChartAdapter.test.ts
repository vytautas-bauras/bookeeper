import tap from "tap";

import SearchableAccountsChartAdapter from "./SearchableAccountsChartAdapter";
import SampleChartOfAccounts from "../Sample/SampleChartOfAccounts";
import { ChartAccountType } from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";

const chartOfAccounts = SampleChartOfAccounts();

const searchableAccountsChartAdapter = new SearchableAccountsChartAdapter(chartOfAccounts);
tap.equals(searchableAccountsChartAdapter.getAccountByCode("400"), chartOfAccounts.getRootAccountByType(ChartAccountType.Revenues));

