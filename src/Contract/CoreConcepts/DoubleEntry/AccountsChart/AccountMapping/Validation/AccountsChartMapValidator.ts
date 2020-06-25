import ChartAccountMappings from "../ChartAccountMappings";
import Validator from "../../../../Validation/Validator";

export default interface AccountsChartMapValidator extends Validator {
    /**
     * @throws ChartHasUnmappedAccountsError
     * @param target 
     */
    validate(target: ChartAccountMappings): void;
}