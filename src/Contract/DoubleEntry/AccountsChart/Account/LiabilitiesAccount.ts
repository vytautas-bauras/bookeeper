interface LiabilitiesAccount extends BaseAccount {
    getParentAccount(): LiabilitiesAccount;
    getChildAccounts(): LiabilitiesAccount[];
}