import classNames from "classnames/bind";

import styles from "./Popper.module.scss";

const cx = classNames.bind(styles);

function Popper({ children, search }) {
  return <div className={cx("wrapper", { search: search })}>{children}</div>;
}

export default Popper;
