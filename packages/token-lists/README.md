# YokaiSwap Token Lists

This repo contains main YokaiSwap token list and tools to validate it.

## How to add external lists

URLs to external lists are stored in `token-lists.json`, if you want your list to be available on upcoming list UI page - submit a PR modifying `token-lists.json`.

## How to add new lists within this repository

- Add an array of tokens under `src/tokens`
- Add `checksum:newlistname`, `generate:newlistname`, `makelist:newlistname` command to `package.json` analogous to YokaiSwap default and extended list scripts.
- Modify `checksum.ts`, `buildList.ts`, `ci-check.ts`, and `default.test.ts` to handle new list

## How to add new tokens to YokaiSwap (extended) token list

Note - this is not something we expect pull requests for.  
Unless you've been specifically asked by someone from PCS team please do no submit PRs to be listed on default PCS list. You can still trade your tokens on PCS exchange by pasting your address into the token field.

- Add new tokens to `src/tokens/yokaiswap-extended.json` file
- Run `yarn makelist:pcs-extended`
  - By default new list will have patch version number bumped by 1 (e.g. `2.0.1` -> `2.0.2`).
  - If you want to bump minor version add `minor` after makelist command `yarn makelist:pcs-extended minor`
  - If you want to bump major version add `major` after makelist command `yarn makelist:pcs-extended major`
- If tests pass - new token list will be created under `lists` directory

For list to be considered valid it need to satisfy the following criteria:

- It passes [token list schema](https://github.com/Uniswap/token-lists/blob/master/src/tokenlist.schema.json) validation (schema is [slightly modified](src/schema.ts))
- There are no duplicate addresses, symbols or token names in the list
- All addresses are valid and checksummed (`yarn checksum:pcs` automatically converts addresses to checksummed versions, it is also part of `yarn makelist:pcs`)
