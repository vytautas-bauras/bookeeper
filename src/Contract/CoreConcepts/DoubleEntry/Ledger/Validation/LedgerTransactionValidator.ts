import Validatable from "Contract/CoreConcepts/Validation/Validatable";
import LedgerTransaction from "../LedgerTransaction";

export default interface LedgerTransactionValidator extends Validatable {
    /**
     * 
     * @param target 
     * @throws LedgerTransactionBalanceNotZeroError
     */
    validate(target: LedgerTransaction): void;
}