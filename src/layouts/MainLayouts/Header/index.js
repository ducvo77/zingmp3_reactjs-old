import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TippyTollTip from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react/headless";

import styles from "./Header.module.scss";
import {
  faAngleRight,
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
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Button from "~/components/Button";
import Popper from "~/components/Popper";
import Accounts from "~/components/Accounts";
import MENU_LIST from "~/untils/menu";

const cx = classNames.bind(styles);

function Header() {
<<<<<<< HEAD
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUrl, setCurrentUrl] = useState("");
  const [backDisabled, setBackDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, [window.location.href]);

  const handleClickBack = () => {
    const isLocalhost = currentUrl.indexOf("http://localhost:3000") === 0;
    if (isLocalhost) {
      navigate(-1);
      console.log("true");
    } else {
      navigate(null);
      console.log("false");
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const isLocalhost = currentUrl.indexOf("http://localhost:3000") === 0;
      if (!isLocalhost) {
        window.history.replaceState(null, "", window.location.href);
        
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [currentUrl]);

  const handleClickNext = () => {
    navigate.length > 1 ? navigate(1) : setNextDisabled(true);
  };
=======
  // const navigate = useNavigate();
  // const location = useLocation();
  const [backDisabled, setBackDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  // useEffect(() => {});

  const handleClickBack = () => {};

  const handleClickNext = () => {};
>>>>>>> origin/main

  return (
    <div className={cx("wrapper")}>
      <div className={cx("level-left")}>
        <Button
          disabled={backDisabled}
          onClick={handleClickBack}
          className={cx("arrow")}
        >
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </Button>
        <Button
          disabled={nextDisabled}
          onClick={handleClickNext}
          className={cx("arrow")}
        >
          <FontAwesomeIcon icon={faArrowRightLong} />
        </Button>

        <div className={cx("search")}>
          <Button
            leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
            className={cx("search-btn")}
          ></Button>
          <div style={{ width: "100%" }}>
            <Tippy
              hideOnClick
              interactive
              trigger="focus"
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
              <input
                className={cx("search-input")}
                type="text"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
              />
            </Tippy>
          </div>
          <Button
            rightIcon={<FontAwesomeIcon icon={faX} />}
            className={cx("clear-btn")}
          ></Button>
        </div>
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
        <div>
          <Tippy
            trigger="click"
            hideOnClick
            interactive
            render={(attrs) => (
              <div className={cx("menu-options")} tabIndex="-1" {...attrs}>
                <Popper menu>
                  <div className={cx("menu-container")}>
                    <div className={cx("container-menu-top")}>
                      {MENU_LIST.map(
                        (list, idx) =>
                          list.top && (
                            <div
                              key={idx}
                              className={cx("menu-option", "menu-top")}
                            >
                              <span className={cx("menu-icon")}>
                                {list.icon}
                              </span>
                              <span className={cx("menu-title")}>
                                {list.title}
                              </span>
                              {list.icon_sub && (
                                <span className={cx("menu-icon-sub")}>
                                  {list.icon_sub}
                                </span>
                              )}

                              <div className={cx("menu-hover-container")}>
                                {list.children &&
                                  list.children.map((children, idx) => (
                                    <button
                                      key={idx}
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
                                        <div
                                          className={cx(
                                            "container-content-hover"
                                          )}
                                        >
                                          <span className={cx("content-hover")}>
                                            {children.content}
                                          </span>
                                          <span
                                            className={cx(
                                              "container-btn-start",
                                              {
                                                active: true,
                                              }
                                            )}
                                          >
                                            {/* <div className={cx("circle")}></div> */}
                                          </span>
                                        </div>
                                      )}
                                    </button>
                                  ))}
                              </div>
                            </div>
                          )
                      )}
                    </div>

                    <div className={cx("dash")}></div>

                    <div className={cx("container-menu-bottom")}>
                      {MENU_LIST.map(
                        (list, idx) =>
                          list.bottom && (
                            <button
                              key={idx}
                              className={cx("menu-option", "menu-bottom")}
                            >
                              <span className={cx("menu-icon")}>
                                {list.icon}
                              </span>
                              <span className={cx("menu-title")}>
                                {list.title}
                              </span>
                            </button>
                          )
                      )}
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
        </div>
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
