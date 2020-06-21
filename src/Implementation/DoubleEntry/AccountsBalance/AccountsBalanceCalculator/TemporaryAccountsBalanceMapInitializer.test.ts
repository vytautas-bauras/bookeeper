import tap from 'tap';

const accountsReceivableAccount = {
    getAccountName() {
        ""
    }
}

const initializer = new TemporaryAccountsBalanceMapInitializer({
    getAccountList() {
        return {
            "100 - Assets": {
                getAccountName() {
                    return "Assets"
                },
                getChildAccounts() {

                }
            }
        }
    }
} as ChartAccountListProvider);