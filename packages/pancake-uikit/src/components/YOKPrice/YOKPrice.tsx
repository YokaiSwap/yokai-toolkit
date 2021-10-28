import React from "react";
import styled from "styled-components";
import { YokaiRoundIcon } from "../Svg";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  yokPriceUSD?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const YOKPrice: React.FC<Props> = ({ yokPriceUSD, color = "textSubtle" }) => {
  return yokPriceUSD ? (
    <PriceLink
      href="https://testnet.yokaiswap.com/swap?outputCurrency=0xc5e133E6B01b2C335055576C51A53647B1b9b624"
      target="_blank"
    >
      <YokaiRoundIcon width="24px" mr="8px" />
      <Text color={color} bold>{`$${yokPriceUSD.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(YOKPrice);
