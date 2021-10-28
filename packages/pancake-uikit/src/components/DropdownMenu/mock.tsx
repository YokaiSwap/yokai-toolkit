import { noop } from "lodash";
import { DropdownMenuItems, DropdownMenuItemType } from "./types";

const ItemsMock: DropdownMenuItems[] = [
  {
    label: "Exchange",
    href: "/swap",
  },
  {
    label: "Liquidity",
    href: "/pool",
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    label: "Disconnect",
    onClick: noop,
    type: DropdownMenuItemType.BUTTON,
  },
];

export default ItemsMock;
