import Validator from "Contract/CoreConcepts/Validation/Validator";
import AccountsBalance from "../AccountsBalance";

export default interface AccountsBalanceEquationValidator extends Validator {
    /**
     * Checks if the fundamental accounting equation holds true for the given AccountsBalance
     * 
     * @param target 
     * @throws FundamentalAccountingEquationDoesNotHoldError
     */
    validate(target: AccountsBalance): void;
}