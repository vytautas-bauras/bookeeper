## Chart of Accounts
Abstractions that define the structure of the Chart of Accounts.

## What is a Chart of Accounts?
https://www.accountingtools.com/articles/2017/5/14/the-chart-of-accounts

## TypeScript Caveats 
TypeScript does not support runtime type-checks: it is not possible to apply different logic based on a runtime object implementing a specific interface. This means that the types of accounts can only be differentiated by comparing property values, not performing "instanceof" of checks and in turn makes it impossible to contractually enforce the "every sub-account must have the same type" rule.

Rules that are impossible to implement contractually in TypeScript (using interfaces or at least abstract classes) are defined as validation rules.