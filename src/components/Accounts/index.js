import { faEllipsisVertical, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import styles from "./Accounts.module.scss";

const cx = classNames.bind(styles);

function Accounts() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("media-left")}>
        <img
          src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/3/3/4/3/33431183ea49c8791e6c625be4009b39.jpg"
          alt=""
        />
      </div>
      <div className={cx("content")}>
        <h4 className={cx("title")}>Simple Love</h4>
        <span className={cx("sub-title")}> Obito, Seachains, Davis</span>
      </div>
      <div className={cx("media-right")}>
        <FontAwesomeIcon className={cx("icon-heart")} icon={faHeart} />
        <FontAwesomeIcon
          className={cx("icon-more")}
          icon={faEllipsisVertical}
        />
      </div>
    </div>
  );
}

export default Accounts;
