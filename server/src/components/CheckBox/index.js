import { ErrorMessage } from "../ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineGray900: "border-bw071 border-gray_900 border-solid",
  OutlineGray900_1: "border-bw071 border-gray_900 border-solid",
};
const shapes = { RoundedBorder1: "rounded-radius141" };
const sizes = { sm: "pt-[1px]" };

const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      errors = [],
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${shapes[shape] || ""} ${
              variants[variant] || ""
            } ${sizes[size] || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            {...restProps}
          />
          {label}
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

CheckBox.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder1"]),
  variant: PropTypes.oneOf(["OutlineGray900", "OutlineGray900_1"]),
  size: PropTypes.oneOf(["sm"]),
};
CheckBox.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  shape: "RoundedBorder1",
  variant: "OutlineGray900",
  size: "",
};

export { CheckBox };
