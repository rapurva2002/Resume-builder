import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineGray9007a: "border border-gray_900_7a border-solid",
  OutlineGray900: "border-bw071 border-gray_900 border-solid",
  OutlineBlack900: "outline outline-[0.71px] outline-black_900",
};
const shapes = {
  RoundedBorder8: "rounded-radius8",
  RoundedBorder3: "rounded-radius353",
};
const sizes = { sm: "md:p-[14px] p-[21px] sm:px-[15px] sm:py-[11px]" };

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder8", "RoundedBorder3"]),
  variant: PropTypes.oneOf([
    "OutlineGray9007a",
    "OutlineGray900",
    "OutlineBlack900",
  ]),
  size: PropTypes.oneOf(["sm"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder3",
  variant: "OutlineGray900",
  size: "",
};

export { Input };
