import AccountsBalance from "../AccountsBalance";
import ChartAccountMappings from "../../AccountsChart/AccountMapping/ChartAccountMappings";

export default interface AccountsBalanceMapper {
    mapBalance(balance: AccountsBalance, mappedAccountsChart: ChartAccountMappings): AccountsBalance;
}