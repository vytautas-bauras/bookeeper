import LedgerEntry from "./LedgerEntry";
import Validatable from "Contract/CoreConcepts/Validation/Validatable";

export default interface LedgerTransaction extends Validatable {
    getTransactionDate(): Date;
    getTransactionEntries(): LedgerEntry[];
    getTransactionDescription(): string;
}