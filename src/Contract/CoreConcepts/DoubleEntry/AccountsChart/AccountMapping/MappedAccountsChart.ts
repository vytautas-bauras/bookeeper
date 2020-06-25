import AccountsChart from "../AccountsChart";
import Validatable from "../../../Validation/Validatable";
import MappedAccount from "./MappedAccount";
import { ChartAccountType } from "../ChartAccountType";

export default interface MappedAccountsChart extends AccountsChart, Validatable {
    getBaseAccountsChart(): AccountsChart;
    getRootAccountByType(accountType: ChartAccountType): MappedAccount;
}