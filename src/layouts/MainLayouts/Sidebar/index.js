import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faMusic,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Sidebar.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("main")}>
        <Link to={"/"} className={cx("logo")}>
          <img
            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
            alt=""
          />
        </Link>
        <ul className={cx("container")}>
          <Button sidebar leftIcon={<FontAwesomeIcon icon={faMusic} />}>
            <span>Cá nhân</span>
          </Button>
          <Button sidebar leftIcon={<FontAwesomeIcon icon={faMusic} />}>
            <span>Khám phá</span>
          </Button>
          <Button
            sidebar
            leftIcon={<FontAwesomeIcon icon={faMusic} />}
            rightIcon={<FontAwesomeIcon icon={faCirclePlay} />}
          >
            <span>#zing chart</span>
          </Button>
          <Button
            sidebar
            leftIcon={<FontAwesomeIcon icon={faMusic} />}
            rightIcon={<FontAwesomeIcon icon={faCirclePlay} />}
          >
            <span>Radio</span>
          </Button>
          <Button sidebar leftIcon={<FontAwesomeIcon icon={faMusic} />}>
            <span>Theo dõi</span>
          </Button>
        </ul>
      </div>
      <div class={cx("sidebar-divide")}></div>
      <div className={cx("sub")}>
        <ul className={cx("container")}>
          <Button
            sidebar
            leftIcon={<FontAwesomeIcon icon={faMusic} />}
            rightIcon={<FontAwesomeIcon icon={faCirclePlay} />}
          >
            <span>Nhạc mới</span>
          </Button>
          <Button sidebar leftIcon={<FontAwesomeIcon icon={faMusic} />}>
            <span>Thể loại</span>
          </Button>
          <Button sidebar leftIcon={<FontAwesomeIcon icon={faMusic} />}>
            <span>Top 100</span>
          </Button>
          <Button sidebar leftIcon={<FontAwesomeIcon icon={faMusic} />}>
            <span>MV</span>
          </Button>
        </ul>
      </div>
      <Button
        stickySidebar
        leftIcon={<FontAwesomeIcon icon={faPlus} />}
        className={cx("sticky-sidebar")}
      >
        <span>Tạo playlist mới</span>
      </Button>
    </div>
  );
}

export default Sidebar;
