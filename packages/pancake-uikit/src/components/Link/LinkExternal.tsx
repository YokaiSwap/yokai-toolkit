import React from "react";
import Link from "./Link";
import { LinkProps } from "./types";
import OpenNewIcon from "../Svg/Icons/OpenNew";

const LinkExternal: React.FC<LinkProps & { iconWidth?: string }> = ({ children, iconWidth, ...props }) => {
  return (
    <Link external {...props}>
      {children}
      <OpenNewIcon width={iconWidth} color={props.color ? props.color : "primary"} ml="4px" />
    </Link>
  );
};

export default LinkExternal;
