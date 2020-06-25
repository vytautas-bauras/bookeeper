import AccountBalance from "./AccountBalance";
import { ChartAccountType } from "../AccountsChart/ChartAccountType";
import Validatable from "../../Validation/Validatable";

export default interface AccountsBalance extends Validatable {    
    getRootBalanceByAccountType(accountType: ChartAccountType): AccountBalance;
}