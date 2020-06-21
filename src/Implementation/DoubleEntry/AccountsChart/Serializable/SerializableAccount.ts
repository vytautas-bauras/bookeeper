interface SerializableAccount {
    accountName: string;
    childAccounts: SerializableAccount[]; 
}