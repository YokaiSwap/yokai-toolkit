import Metamask from "../../components/Svg/Icons/Metamask";
import SafePal from "../../components/Svg/Icons/SafePal";
import ImToken from "../../components/Svg/Icons/ImToken";
import TokenPocket from "../../components/Svg/Icons/TokenPocket";

import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "MetaMask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
    priority: 1,
  },
  {
    title: "SafePal",
    icon: SafePal,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },
  {
    title: "imToken",
    icon: ImToken,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },
  {
    title: "TokenPocket",
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },
];

export default connectors;
export const connectorLocalStorageKey = "connectorIdv2";
export const walletLocalStorageKey = "wallet";
