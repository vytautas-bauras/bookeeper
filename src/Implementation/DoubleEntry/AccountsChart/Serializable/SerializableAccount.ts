interface SerializableAccount<T extends AccountType> {
    accountType: T;
    accountName: string;
    childAccounts: SerializableAccount<T>[]; 
}