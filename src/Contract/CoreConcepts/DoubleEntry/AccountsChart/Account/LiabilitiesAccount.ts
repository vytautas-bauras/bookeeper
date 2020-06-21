import BaseAccount from "./BaseAccount";

export default interface LiabilitiesAccount extends BaseAccount {
    getParentAccount(): LiabilitiesAccount|undefined;
    getChildAccounts(): LiabilitiesAccount[];
}