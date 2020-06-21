import AssetsAccount from "./Account/AssetsAccount";
import LiabilitiesAccount from "./Account/LiabilitiesAccount";
import EquityAccount from "./Account/EquityAccount";
import RevenuesAccount from "./Account/RevenuesAccount";
import ExpensesAccount from "./Account/ExpensesAccount";

export default interface AccountsChart {
    getAssets(): AssetsAccount;
    getLiabilities(): LiabilitiesAccount;
    getEquity(): EquityAccount;
    getRevenues(): RevenuesAccount;
    getExpenses(): ExpensesAccount;
}