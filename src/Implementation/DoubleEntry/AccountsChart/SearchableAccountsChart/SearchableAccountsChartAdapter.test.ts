import tap from "tap";

import SearchableAccountsChartAdapter from "./SearchableAccountsChartAdapter";
import chartOfAccounts from "../Sample/SampleChartOfAccounts";

const searchableAccountsChartAdapter = new SearchableAccountsChartAdapter(chartOfAccounts);
tap.equals(searchableAccountsChartAdapter.getAccountByName("400"), chartOfAccounts.getRevenues());

