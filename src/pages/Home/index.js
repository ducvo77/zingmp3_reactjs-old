import classNames from "classnames/bind";

import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("gallery-container")}>
        <div className={cx("gallery-item")}>
          <img
            src="https://photo-zmp3.zmdcdn.me/banner/4/9/9/8/49987074fe79ba7736517a688e6fb0bc.jpg"
            alt=""
          />
        </div>
        <div className={cx("gallery-item")}>
          <img
            src="https://photo-zmp3.zmdcdn.me/banner/4/9/9/8/49987074fe79ba7736517a688e6fb0bc.jpg"
            alt=""
          />
        </div>
        <div className={cx("gallery-item")}>
          <img
            src="https://photo-zmp3.zmdcdn.me/banner/4/9/9/8/49987074fe79ba7736517a688e6fb0bc.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
