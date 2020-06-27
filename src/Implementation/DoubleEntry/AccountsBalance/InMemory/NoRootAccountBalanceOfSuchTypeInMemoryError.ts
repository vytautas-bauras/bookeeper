import NoRootAccountBalanceOfSuchTypeError from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsBalance/NoRootAccountBalanceOfSuchTypeError";
import { ChartAccountType } from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";

export default class NoRootAccountBalanceOfSuchTypeInMemoryError implements NoRootAccountBalanceOfSuchTypeError {
    public readonly name = 'NoRootAccountBalanceOfSuchTypeInMemoryError'
    public readonly message: string;

    constructor(
        accountType: ChartAccountType
    ) {
        this.message = `No AccountBalance for type [${accountType}] was found in the AccountsBalance`;
    }
}