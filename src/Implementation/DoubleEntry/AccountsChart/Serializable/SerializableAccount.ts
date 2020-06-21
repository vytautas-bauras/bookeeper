interface SerializableAccount {
    accountCode: string;
    accountTitle: string;
    childAccounts: SerializableAccount[]; 
}