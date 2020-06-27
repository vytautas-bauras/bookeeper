import AccountsBalanceMapper from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsBalance/Mapping/AccountsBalanceMapper";
import AccountsBalance from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsBalance/AccountsBalance";
import TemporaryAccountsBalanceMapInitializer, { TemporaryAccountBalanceMap } from "../AccountsBalanceCalculator/TemporaryAccountsBalanceMapInitializer";
import ReadOnlyLedgerAccountsBalanceAdapter from "../AccountsBalanceCalculator/ReadOnlyLedgerAccountsBalanceAdapter";
import AccountBalance from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsBalance/AccountBalance";
import ChartAccountMappings from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/AccountMapping/ChartAccountMappings";
import { ChartAccountType } from "../../../../Contract/CoreConcepts/DoubleEntry/AccountsChart/ChartAccountType";

export default class DefaultAccountsBalanceMapper implements AccountsBalanceMapper {
    constructor(
        private scratch: TemporaryAccountBalanceMap
    ) {
    }

    mapBalance(baseBalance: AccountsBalance, mappings: ChartAccountMappings): AccountsBalance {
        this.mapRootAccount(baseBalance, ChartAccountType.Assets, mappings);
        this.mapRootAccount(baseBalance, ChartAccountType.Liabilities, mappings);
        this.mapRootAccount(baseBalance, ChartAccountType.Equity, mappings);
        this.mapRootAccount(baseBalance, ChartAccountType.Revenues, mappings);
        this.mapRootAccount(baseBalance, ChartAccountType.Expenses, mappings);

        return new ReadOnlyLedgerAccountsBalanceAdapter(mappings.getTargetAccountsChart(), this.scratch);
    }

    private mapRootAccount(
        baseBalance: AccountsBalance, 
        accountType: ChartAccountType, 
        mappings: ChartAccountMappings
    ) {
        this.mapAccountBalanceRecursive(
            baseBalance.getRootBalanceByAccountType(accountType),
            mappings
        );
    }

    private mapAccountBalanceRecursive(
        accountBalance: AccountBalance, 
        mappings: ChartAccountMappings
    ) {
        const targetBalance = this.scratch[mappings.getCorrespondingTargetAccountCode(accountBalance.getChartAccount().getAccountCode())];
        targetBalance.balance += accountBalance.getBalance();
        targetBalance.credit += accountBalance.getCredit();
        targetBalance.debit += accountBalance.getDebit();

        accountBalance.getChildAccountBalances().forEach(child => this.mapAccountBalanceRecursive(child, mappings));
    }
}