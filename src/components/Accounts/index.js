import {
  faEllipsisVertical,
  faHeart,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import "tippy.js/dist/tippy.css";
import TippyTollTip from "@tippyjs/react";

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
        <button className={cx("play-btn")}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <div className={cx("opacity")}></div>
      </div>
      <div className={cx("content")}>
        <h4 className={cx("title")}>Simple Love</h4>
        <span className={cx("sub-title")}> Obito, Seachains, Davis</span>
      </div>
      <div className={cx("media-right")}>
        <TippyTollTip content="Thêm vào thư viện">
          <button className={cx("container-btn", "container-btn-heart")}>
            <FontAwesomeIcon className={cx("icon-heart")} icon={faHeart} />
          </button>
        </TippyTollTip>
        <TippyTollTip content="Khác">
          <button className={cx("container-btn", "container-btn-more")}>
            <FontAwesomeIcon
              className={cx("icon-more")}
              icon={faEllipsisVertical}
            />
          </button>
        </TippyTollTip>
      </div>
    </div>
  );
}

export default Accounts;
