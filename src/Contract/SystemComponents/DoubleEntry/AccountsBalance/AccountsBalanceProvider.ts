import AccountsBalance from "Contract/CoreConcepts/DoubleEntry/AccountsBalance/AccountsBalance";

export default interface AccountsBalanceProvider {
    getAccountsBalance(from?: Date, to?: Date): AccountsBalance;
}