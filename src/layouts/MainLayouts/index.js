import classNames from "classnames/bind";

import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "./MainLayouts.module.scss";

const cx = classNames.bind(styles);

function MainLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Sidebar />
      <div className={cx("container")}>
        <Header />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;
