import BaseAccount from "./BaseAccount";

export default interface RevenuesAccount extends BaseAccount {
    getParentAccount(): RevenuesAccount|undefined;
    getChildAccounts(): RevenuesAccount[];
}