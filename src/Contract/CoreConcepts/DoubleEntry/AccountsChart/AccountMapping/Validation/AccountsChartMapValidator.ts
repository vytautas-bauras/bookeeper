import MappedAccountsChart from "../MappedAccountsChart";
import Validator from "Contract/CoreConcepts/Validation/Validator";

export default interface AccountsChartMapValidator extends Validator {
    /**
     * @throws ChartHasUnmappedAccountsError
     * @param target 
     */
    validate(target: MappedAccountsChart): void;
}