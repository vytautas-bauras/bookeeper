interface SerializableAccount {
    accountCode: string;
    childAccounts: SerializableAccount[]; 
}