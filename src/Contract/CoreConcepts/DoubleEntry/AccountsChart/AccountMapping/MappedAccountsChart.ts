import AccountsChart from "../AccountsChart";
import Validatable from "../../../Validation/Validatable";

export default interface MappedAccountsChart extends AccountsChart, Validatable {
    getTargetAccountsChart(): AccountsChart;
}