import AccountBalance from "./AccountBalance";
import AssetsAccount from "../AccountsChart/Account/AssetsAccount";
import LiabilitiesAccount from "../AccountsChart/Account/LiabilitiesAccount";
import EquityAccount from "../AccountsChart/Account/EquityAccount";
import RevenuesAccount from "../AccountsChart/Account/RevenuesAccount";
import ExpensesAccount from "../AccountsChart/Account/ExpensesAccount";
import Validatable from "Contract/CoreConcepts/Validation/Validatable";

export default interface AccountsBalance extends Validatable {    
    getAssets(): AccountBalance<AssetsAccount>;
    getLiabilities(): AccountBalance<LiabilitiesAccount>;
    getEquity(): AccountBalance<EquityAccount>;
    getRevenues(): AccountBalance<RevenuesAccount>;
    getExpenses(): AccountBalance<ExpensesAccount>;
}