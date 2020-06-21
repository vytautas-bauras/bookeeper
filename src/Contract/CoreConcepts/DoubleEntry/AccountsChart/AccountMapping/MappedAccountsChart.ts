import AccountsChart from "../AccountsChart";
import Validatable from "Contract/CoreConcepts/Validation/Validatable";

export default interface MappedAccountsChart extends AccountsChart, Validatable {
    getTargetAccountsChart(): AccountsChart;
}