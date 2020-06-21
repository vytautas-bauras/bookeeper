import tap from 'tap';

const accountsReceivableAccount = {
    getAccountCode() {
        ""
    }
}

const initializer = new TemporaryAccountsBalanceMapInitializer({
    getAccountList() {
        return {
            "100 - Assets": {
                getAccountCode() {
                    return "Assets"
                },
                getChildAccounts() {

                }
            }
        }
    }
} as ChartAccountListProvider);