import fs from "fs";
import path from "path";
import { TokenList } from "@uniswap/token-lists";
import { version as yokaiswapDefaultVersion } from "../lists/yokaiswap-default.json";
import { version as yokaiswapExtendedVersion } from "../lists/yokaiswap-extended.json";
import { version as yokaiswapTop15Version } from "../lists/yokaiswap-top-15.json";
import { version as yokaiswapTop100Version } from "../lists/yokaiswap-top-100.json";
import yokaiswapDefault from "./tokens/yokaiswap-default.json";
import yokaiswapExtended from "./tokens/yokaiswap-extended.json";
import yokaiswapTop100 from "./tokens/yokaiswap-top-100.json";
import yokaiswapTop15 from "./tokens/yokaiswap-top-15.json";

export enum VersionBump {
  "major" = "major",
  "minor" = "minor",
  "patch" = "patch",
}

type Version = {
  major: number;
  minor: number;
  patch: number;
};

const lists = {
  "yokaiswap-default": {
    list: yokaiswapDefault,
    name: "YokaiSwap Default",
    keywords: ["yokaiswap", "default"],
    logoURI: "https://tokens.yokaiswap.com/images/0xc5e133E6B01b2C335055576C51A53647B1b9b624.png",
    sort: false,
    currentVersion: yokaiswapDefaultVersion,
  },
  "yokaiswap-extended": {
    list: yokaiswapExtended,
    name: "YokaiSwap Extended",
    keywords: ["yokaiswap", "extended"],
    logoURI: "https://tokens.yokaiswap.com/images/0xc5e133E6B01b2C335055576C51A53647B1b9b624.png",
    sort: true,
    currentVersion: yokaiswapExtendedVersion,
  },
  "yokaiswap-top-100": {
    list: yokaiswapTop100,
    name: "YokaiSwap Top 100",
    keywords: ["yokaiswap", "top 100"],
    logoURI: "https://tokens.yokaiswap.com/images/0xc5e133E6B01b2C335055576C51A53647B1b9b624.png",
    sort: true,
    currentVersion: yokaiswapTop100Version,
  },
  "yokaiswap-top-15": {
    list: yokaiswapTop15,
    name: "YokaiSwap Top 15",
    keywords: ["yokaiswap", "top 15"],
    logoURI: "https://tokens.yokaiswap.com/images/0xc5e133E6B01b2C335055576C51A53647B1b9b624.png",
    sort: true,
    currentVersion: yokaiswapTop15Version,
  },
};

const getNextVersion = (currentVersion: Version, versionBump?: VersionBump) => {
  const { major, minor, patch } = currentVersion;
  switch (versionBump) {
    case VersionBump.major:
      return { major: major + 1, minor, patch };
    case VersionBump.minor:
      return { major, minor: minor + 1, patch };
    case VersionBump.patch:
    default:
      return { major, minor, patch: patch + 1 };
  }
};

export const buildList = (listName: string, versionBump?: VersionBump): TokenList => {
  const { list, name, keywords, logoURI, sort, currentVersion } = lists[listName];
  const version = getNextVersion(currentVersion, versionBump);
  return {
    name,
    timestamp: new Date().toISOString(),
    version,
    logoURI,
    keywords,
    // sort them by symbol for easy readability (not applied to default list)
    tokens: sort
      ? list.sort((t1, t2) => {
          if (t1.chainId === t2.chainId) {
            // YOK first in extended list
            if ((t1.symbol === "YOK") !== (t2.symbol === "YOK")) {
              return t1.symbol === "YOK" ? -1 : 1;
            }
            return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
          }
          return t1.chainId < t2.chainId ? -1 : 1;
        })
      : list,
  };
};

export const saveList = (tokenList: TokenList, listName: string): void => {
  const tokenListPath = `${path.resolve()}/lists/${listName}.json`;
  const stringifiedList = JSON.stringify(tokenList, null, 2);
  fs.writeFileSync(tokenListPath, stringifiedList);
  console.info("Token list saved to ", tokenListPath);
};
