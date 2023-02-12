import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TippyTollTip from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react/headless";

import styles from "./Header.module.scss";
import {
  faArrowLeftLong,
  faArrowRightLong,
  faBan,
  faCircleInfo,
  faCirclePlay,
  faDownload,
  faFileLines,
  faGear,
  faGem,
  faMagnifyingGlass,
  faPhone,
  faRectangleAd,
  faShieldHalved,
  faShirt,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button";
import Popper from "~/components/Popper";
import Accounts from "~/components/Accounts";

const cx = classNames.bind(styles);

function Header() {
  const MENU_LIST_TOP = [
    {
      title: "Danh sách chặn",
      icon: <FontAwesomeIcon icon={faBan} />,
      children: false,
    },
    {
      title: "Chất lượng nhạc",
      icon: <FontAwesomeIcon icon={faBan} />,
      children: [
        {
          title: "SQ * 180",
          icon: <FontAwesomeIcon icon={faBan} />,
          description: "Giảm sử dụng dữ liệu cho các kết nối chậm hơn",
        },
        {
          title: "HQ * 320",
          icon: <FontAwesomeIcon icon={faBan} />,
          description:
            "Kết hợp tốt nhất giữa việc sử dụng dữ liệu và chất lượng âm thanh",
        },
      ],
    },
    {
      title: "Giao diện",
      icon: <FontAwesomeIcon icon={faCirclePlay} />,
      children: [
        {
          content: "Luôn phát nhạc toàn màn hình",
        },
        {
          content: "Hiệu ứng",
        },
      ],
    },
  ];

  const MENU_LIST_BOTTOM = [
    {
      title: "Giới thiệu",
      icon: <FontAwesomeIcon icon={faCircleInfo} />,
    },
    {
      title: "Liên hệ",
      icon: <FontAwesomeIcon icon={faPhone} />,
    },
    {
      title: "Quảng cáo",
      icon: <FontAwesomeIcon icon={faRectangleAd} />,
    },
    {
      title: "Thỏa thuận sử dụng",
      icon: <FontAwesomeIcon icon={faFileLines} />,
    },
    {
      title: "Chính sách bảo mật",
      icon: <FontAwesomeIcon icon={faShieldHalved} />,
    },
  ];

  return (
    <div className={cx("wrapper")}>
      <div className={cx("level-left")}>
        <Button disabled={true} className={cx("arrow")}>
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </Button>
        <Button className={cx("arrow")}>
          <FontAwesomeIcon icon={faArrowRightLong} />
        </Button>

        <Tippy
          visible
          interactive
          trigger="click"
          render={(attrs) => (
            <div className="box" tabIndex="-1" {...attrs}>
              <Popper search>
                <h5>Đề xuất cho bạn</h5>
                <Accounts />
                <Accounts />
                <Accounts />
                <Accounts />
              </Popper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <Button
              leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
              className={cx("search-btn")}
            ></Button>

            <input
              className={cx("search-input")}
              type="text"
              placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
            />

            <Button
              rightIcon={<FontAwesomeIcon icon={faX} />}
              className={cx("clear-btn")}
            ></Button>
          </div>
        </Tippy>
      </div>
      <div className={cx("level-right")}>
        <Button
          href="/"
          leftIcon={
            <FontAwesomeIcon
              className={cx("download-icon")}
              icon={faDownload}
            />
          }
          className={cx("download-desktop-app")}
        >
          <span className={cx("download-content")}>Tải bản Windows</span>
        </Button>
        <TippyTollTip content="Chủ đề">
          <button className={cx("setting-item")}>
            <FontAwesomeIcon icon={faShirt} />
          </button>
        </TippyTollTip>
        <TippyTollTip content="Nâng cấp vip">
          <a href="/" className={cx("setting-item")}>
            <FontAwesomeIcon icon={faGem} />
          </a>
        </TippyTollTip>

        <Tippy
          trigger="click"
          hideOnClick
          interactive
          render={(attrs) => (
            <div className={cx("menu-options")} tabIndex="-1" {...attrs}>
              <Popper>
                <div className={cx("menu-container")}>
                  <div className={cx("container-menu-top")}>
                    {MENU_LIST_TOP.map((list) => (
                      <button className={cx("menu-option", "menu-top")}>
                        <span className={cx("menu-icon")}>{list.icon}</span>
                        <span className={cx("menu-title")}>{list.title}</span>
                        <div className={cx("menu-hover-container")}>
                          {list.children &&
                            list.children.map((children) => (
                              <button
                                className={cx(
                                  "menu-hover-option",
                                  "menu-option"
                                )}
                              >
                                {children.title && (
                                  <b className={cx("title-hover")}>
                                    {children.title}
                                  </b>
                                )}
                                {children.description && (
                                  <div className={cx("description")}>
                                    {children.description}
                                  </div>
                                )}
                                {children.content && (
                                  <span className={cx("content-hover")}>
                                    {children.content}
                                  </span>
                                )}
                              </button>
                            ))}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className={cx("dash")}></div>

                  <div className={cx("container-menu-bottom")}>
                    {MENU_LIST_BOTTOM.map((list) => (
                      <button className={cx("menu-option", "menu-bottom")}>
                        <span className={cx("menu-icon")}>{list.icon}</span>
                        <span className={cx("menu-title")}>{list.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </Popper>
            </div>
          )}
        >
          <TippyTollTip content="Cài đặt">
            <button className={cx("setting-item")}>
              <FontAwesomeIcon icon={faGear} />
            </button>
          </TippyTollTip>
        </Tippy>

        <div className={cx("login-container")}>
          <img
            src="https://avatar.talk.zdn.vn/default.jpg"
            className={cx("avatar")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
