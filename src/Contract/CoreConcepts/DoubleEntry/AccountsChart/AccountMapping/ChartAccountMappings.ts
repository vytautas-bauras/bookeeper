import AccountsChart from "../AccountsChart";
import Validatable from "../../../Validation/Validatable";

export default interface ChartAccountMappings extends Validatable {
    getCorrespondingTargetAccountCode(baseAccountCode: string): string;
    getBaseAccountsChart(): AccountsChart;
    getTargetAccountsChart(): AccountsChart;
}