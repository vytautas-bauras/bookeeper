## Core Concepts
Core Concept contracts encompass an array of bookkeeping process units (data and business rules) without providing an opinion on how they should be implemented: it should not be distinguishable if the data is stored or computed.

The concepts here simply define separate distinctive parts of an accounting system, but no API to a unified system itself. For example, even though the methods for adding Ledger transactions are undefined, the LedgerTransaction validation rules are present among the Core Concepts, signifying the need to validate them (it's usually done at the time of insertion). At which point this happens is completely up to the implementation.

## WIP
This is, of course, a work in progress and as such might see multiple changes as to what ideas are considered core.

