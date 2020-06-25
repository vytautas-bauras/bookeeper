import { ChartAccountType } from "./ChartAccountType";
import Validatable from "../../Validation/Validatable";

export default interface ChartAccount extends Validatable {
    getAccountCode(): string;
    getAccountTitle(): string;
    getParentAccount(): ChartAccount|undefined;
    getChildAccounts(): ChartAccount[];
    getAccountType(): ChartAccountType;
}