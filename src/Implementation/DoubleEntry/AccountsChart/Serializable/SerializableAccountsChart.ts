export default interface SerializableAccountsChart {
    assets: SerializableAccount;
    equity: SerializableAccount;
    liabilities: SerializableAccount;
    revenues: SerializableAccount;
    expenses: SerializableAccount;
}