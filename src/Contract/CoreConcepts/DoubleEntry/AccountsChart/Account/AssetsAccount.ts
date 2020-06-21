import BaseAccount from "./BaseAccount";

export default interface AssetsAccount extends BaseAccount {
    getParentAccount(): AssetsAccount|undefined;
    getChildAccounts(): AssetsAccount[];
}