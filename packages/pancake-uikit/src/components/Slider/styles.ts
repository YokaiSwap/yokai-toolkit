import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import yokaiHeadMain from "./svg/yokaihead-main.svg";
import yokaiHeadMax from "./svg/yokaihead-max.svg";
import yokaiButt from "./svg/yokaibutt.svg";

interface SliderLabelProps {
  progress: string;
}

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isMax: boolean;
}

interface DisabledProp {
  disabled?: boolean;
}

const getCursorStyle = ({ disabled = false }: DisabledProp) => {
  return disabled ? "not-allowed" : "cursor";
};

const getBaseThumbStyles = ({ isMax, disabled }: StyledInputProps) => `
  -webkit-appearance: none;
  background-image: url(${isMax ? `/images/${yokaiHeadMax}` : `/images/${yokaiHeadMain}`});
  background-color: transparent;
  background-repeat: no-repeat;
  border: 0;
  cursor: ${getCursorStyle};
  width: 24px;
  height: 32px;
  filter: ${disabled ? "grayscale(100%)" : "none"};
  transform: translate(-5px, 1px);
  transition: 200ms transform;

  &:hover {
    transform: ${disabled ? "scale(1) translate(-5px, 1px)" : "scale(1.1) translate(-6px, 0px)"};
  }
`;

export const SliderLabelContainer = styled.div`
  bottom: 0;
  position: absolute;
  left: 14px;
  width: calc(100% - 30px);
`;

export const SliderLabel = styled(Text)<SliderLabelProps>`
  bottom: 0;
  font-size: 12px;
  left: ${({ progress }) => progress};
  position: absolute;
  text-align: center;
  min-width: 24px; // Slider thumb size
`;

export const BunnyButt = styled.div<DisabledProp>`
  background: url(${yokaiButt}) no-repeat;
  height: 32px;
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  position: absolute;
  width: 15px;
  top: 14px;
`;

export const BunnySlider = styled.div`
  position: absolute;
  left: 14px;
  width: calc(100% - 14px);
`;

export const StyledInput = styled.input<StyledInputProps>`
  cursor: ${getCursorStyle};
  height: 32px;
  position: relative;

  ::-webkit-slider-thumb {
    ${getBaseThumbStyles}
  }

  ::-moz-range-thumb {
    ${getBaseThumbStyles}
  }

  ::-ms-thumb {
    ${getBaseThumbStyles}
  }
`;

export const BarBackground = styled.div<DisabledProp>`
  background-color: ${({ theme, disabled }) => theme.colors[disabled ? "textDisabled" : "input"]};
  height: 2px;
  position: absolute;
  top: 18px;
  width: calc(100% - 8px);
`;

export const BarProgress = styled.div<DisabledProp>`
  background-color: ${({ theme }) => theme.colors.primary};
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  height: 7px;
  position: absolute;
  top: 18px;
`;
