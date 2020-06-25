import tap from "tap";

import SearchableAccountsChartAdapter from "./SearchableAccountsChartAdapter";
import chartOfAccounts from "../Sample/SampleChartOfAccounts";
import { ChartAccountType } from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";

const searchableAccountsChartAdapter = new SearchableAccountsChartAdapter(chartOfAccounts);
tap.equals(searchableAccountsChartAdapter.getAccountByCode("400"), chartOfAccounts.getRootAccountByType(ChartAccountType.Revenues));

