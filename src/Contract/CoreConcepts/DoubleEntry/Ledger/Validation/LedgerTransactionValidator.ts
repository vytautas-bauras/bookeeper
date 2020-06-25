import LedgerTransaction from "../LedgerTransaction";
import Validatable from "../../../Validation/Validatable";

export default interface LedgerTransactionValidator extends Validatable {
    /**
     * 
     * @param target 
     * @throws LedgerTransactionBalanceNotZeroError
     */
    validate(target: LedgerTransaction): void;
}