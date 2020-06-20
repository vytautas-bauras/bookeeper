## Core Concepts
Core Concept contracts encompass an array of real-word bookkeeping practices without providing an opinion on how they could be implemented: these interfaces only define what we should be able to derive from the stored information, not ways to actually store/modify/retrieve/calculate it.

For example, no methods for adding Ledger transactions are defined, yet the LedgerTransaction validation rules are present among the Core Concepts, signifying the need to validate every transaction (it's usually done at the time of insertion). At which point this in fact happens is completely up to the implementation.

Here concepts simply outline separate important parts of an accounting system, but no API to a unified system itself.

## WIP
This is, of course, a work in progress and as such might see multiple changes as to what ideas are considered core.

