import { ChartAccountType } from "./ChartAccountType";
import ChartAccount from "./ChartAccount";

export default interface AccountsChart {
    getRootAccountByType(type: ChartAccountType): ChartAccount;
}