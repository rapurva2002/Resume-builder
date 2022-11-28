import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder33: "rounded-radius333",
  RoundedBorder20: "rounded-radius20",
  RoundedBorder8: "rounded-radius8",
  RoundedBorder3: "rounded-radius353",
  RoundedBorder14: "rounded-radius14",
  icbRoundedBorder8: "rounded-radius8",
  icbCircleBorder30: "rounded-radius30",
};
const variants = {
  FillBlue700: "bg-blue_700 text-gray_200",
  FillPurple900: "bg-purple_900 text-gray_200",
  OutlineIndigo200:
    "bg-gray_50 outline outline-[3.5px] outline-indigo_200 shadow-bs1 text-blue_700",
  FillBlueA700: "bg-blue_A700 text-white_A700",
  FillLightblueA700: "bg-light_blue_A700 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-deep_purple_A201",
  icbFillGray50: "bg-gray_50",
  icbOutlineGray100:
    "bg-white_A700 border border-gray_100 border-solid shadow-bs",
};
const sizes = {
  sm: "p-[13px] sm:p-[6px] md:p-[8px]",
  md: "md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px]",
  lg: "md:p-[14px] p-[21px] sm:px-[15px] sm:py-[11px]",
  xl: "md:p-[17px] p-[26px] sm:px-[15px] sm:py-[13px]",
  smIcn: "p-[10px] sm:p-[5px] md:p-[6px]",
  mdIcn: "md:p-[12px] p-[18px] sm:px-[15px] sm:py-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "CircleBorder33",
    "RoundedBorder20",
    "RoundedBorder8",
    "RoundedBorder3",
    "RoundedBorder14",
    "icbRoundedBorder8",
    "icbCircleBorder30",
  ]),
  variant: PropTypes.oneOf([
    "FillBlue700",
    "FillPurple900",
    "OutlineIndigo200",
    "FillBlueA700",
    "FillLightblueA700",
    "FillWhiteA700",
    "icbFillGray50",
    "icbOutlineGray100",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smIcn", "mdIcn"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
