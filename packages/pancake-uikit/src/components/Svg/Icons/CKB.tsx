import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 16 16" {...props}>
      <path
        d="m8 16c4.4183 0 8-3.5817 8-8 0-4.4183-3.5817-8-8-8-4.4183 0-8 3.5817-8 8 0 4.4183 3.5817 8 8 8z"
        fill="#fff"
      />
      <path
        d="m10 6.157v2.157l-0.72104 0.02296-0.72104 0.02304 1.7211 1.7193 1.721 1.7193v-7.7986h-2v2.157zm-6 1.7838v3.8993h2v-4.314l0.72104-0.02296 0.72104-0.02304-1.721-1.7193-1.721-1.7194v3.8994z"
        clipRule="evenodd"
        fillRule="evenodd"
        fill="#000"
      />
    </Svg>
  );
};

export default Icon;
