import classNames from "classnames/bind";

import styles from "./Popper.module.scss";

const cx = classNames.bind(styles);

function Popper({ children, search, menu }) {
  return (
    <div className={cx("wrapper", { search: search }, { menu: menu })}>
      {children}
    </div>
  );
}

export default Popper;
