import style from "./Button.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cs = classNames.bind(style);

function Button({
  to,
  href,
  onClick,
  children,
  primary = false,
  outline = false,
  small = false,
  large = false,
  upload = false,
  round = false,
  icon,
  ...passProps
}) {
  let Comp = "button";

  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cs("wrapper", {
    primary,
    outline,
    small,
    large,
    upload,
    round
  });

  return (
    <Comp className={classes} {...props}>
        {icon && <span className={cs("icon")}>{icon}</span>}
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
