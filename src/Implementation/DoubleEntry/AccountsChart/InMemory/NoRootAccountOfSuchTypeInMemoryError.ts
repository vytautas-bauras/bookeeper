import { ChartAccountType } from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";
import NoRootAccountOfSuchTypeError from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/NoRootAccountOfSuchTypeError";

export default class NoRootAccountOfSuchTypeInMemoryError implements NoRootAccountOfSuchTypeError {
    public readonly name = 'NoRootAccountOfSuchTypeInMemoryError'
    public readonly message: string;

    constructor(
        accountType: ChartAccountType
    ) {
        this.message = `No ChartAccount of type [${accountType}] was found in the AccountsChart`;
    }
}