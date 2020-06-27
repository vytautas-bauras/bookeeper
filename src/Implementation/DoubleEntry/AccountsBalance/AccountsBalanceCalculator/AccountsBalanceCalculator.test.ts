import tap from "tap";
import SearchableAccountsChartAdapter from "../../AccountsChart/SearchableAccountsChart/SearchableAccountsChartAdapter";
import SampleChartOfAccounts from "../../AccountsChart/Sample/SampleChartOfAccounts";
import AccountsBalanceCalculator from "./AccountsBalanceCalculator";
import SampleTransactions from "../../Ledger/Sample/SampleTransactions";
import { ChartAccountType } from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";
import TemporaryAccountsBalanceMapInitializer from "./TemporaryAccountsBalanceMapInitializer";
import ReadOnlyAccountsBalanceFactory from "./ReadOnlyAccountsBalanceFactory";

const searchableAccountsChart = new SearchableAccountsChartAdapter(SampleChartOfAccounts());
const calculator = new AccountsBalanceCalculator(
    new TemporaryAccountsBalanceMapInitializer(searchableAccountsChart),
    new ReadOnlyAccountsBalanceFactory(searchableAccountsChart)
);

const balance = calculator.calculateAccountsBalance(SampleTransactions());
const assetsBalance = balance.getRootBalanceByAccountType(ChartAccountType.Assets);
tap.equals(assetsBalance.getBalance(), 500);