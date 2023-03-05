import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  href,
  to,
  src,
  alt,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  disabled,
  stickySidebar,
  hided,
  sidebar,

  ...passProps
}) {
  let Tag = "button";

  const props = {
    onClick,
    ...passProps,
  };

  if (href) {
    Tag = "a";
    props.href = href;
  } else if (to) {
    Tag = Link;
    props.to = to;
  } else if (src) {
    Tag = "img";
    props.src = src;
    props.alt = alt;
  }

  const classes = cx("wrapper", {
    [className]: className,
    disabled,
    sidebar,
    stickySidebar,
  });

  return (
    <Tag className={classes} {...props}>
      {leftIcon && <span className={cx("icon", "icon-left")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && (
        <span className={cx("icon", "icon-right")}>{rightIcon}</span>
      )}
    </Tag>
  );
}

export default Button;
