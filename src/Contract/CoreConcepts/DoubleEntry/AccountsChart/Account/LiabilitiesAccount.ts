interface LiabilitiesAccount extends BaseAccount {
    getParentAccount(): LiabilitiesAccount|undefined;
    getChildAccounts(): LiabilitiesAccount[];
}