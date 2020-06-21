import BaseAccount from "./BaseAccount";

export default interface EquityAccount extends BaseAccount {
    getParentAccount(): EquityAccount|undefined;
    getChildAccounts(): EquityAccount[];
}