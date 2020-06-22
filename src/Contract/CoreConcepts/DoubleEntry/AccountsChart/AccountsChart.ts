import { ChartAccount } from "./Account/ChartAccount";
import { ChartAccountType } from "./ChartAccountType";

export default interface AccountsChart {
    getRootAccountByType(type: ChartAccountType): ChartAccount;
}