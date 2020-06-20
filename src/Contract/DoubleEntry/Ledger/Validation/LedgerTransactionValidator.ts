interface LedgerTransactionValidator extends Validatable {
    /**
     * 
     * @param target 
     * @throws LedgerTransactionBalanceNotZeroError
     */
    validate(target: LedgerTransaction): void;
}