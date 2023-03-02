import {
  faChevronLeft,
  faChevronRight,
  faEllipsisVertical,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import GALLERY from "~/untils/homeGallery";
import styles from "./Home.module.scss";
import * as apis from "../../apis";

const cx = classNames.bind(styles);

function Home() {
  const [active, setActive] = useState(false);
  let isActive = true;

  useEffect(() => {
    const fetchDataHome = async () => {
      const response = await apis.getHome();
      return response;
    };
    fetchDataHome();
  }, []);

  const [visible, setVisible] = useState(false);
  const [zoomAlbum, setZoomAlbum] = useState(false);
  return (
    <div className={cx("wrapper")}>
      <div
        onMouseOver={() => setVisible(true)}
        onMouseOut={() => setVisible(false)}
        className={cx("gallery-container")}
      >
        {GALLERY.map((galleryItem, idx) => (
          <div key={idx} className={cx("gallery-item")}>
            <img src={galleryItem.src} alt={galleryItem.alt} />
          </div>
        ))}

        <div className={cx("gallery-btn", { "btn-hover": visible })}>
          <button className={cx(" back", "btn")}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className={cx(" next", "btn")}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
      <div className={cx("container-section")}>
        <h3 className={cx("title-section")}>Gần Đây</h3>
        <div className={cx("select-recently")}>
          <div
            onMouseOver={() => setZoomAlbum(true)}
            onMouseOut={() => setZoomAlbum(false)}
            className={cx("album")}
          >
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/d/2/5/ed251cf560be4747e7737b535c357f07.jpg"
              alt=""
            />
            <span className={cx("title-recently")}>#zingchart</span>
          </div>
          <div className={cx("album")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/d/2/5/ed251cf560be4747e7737b535c357f07.jpg"
              alt=""
            />
            <span className={cx("title-recently")}>#zingchart</span>
          </div>
        </div>
      </div>
      <div className={cx("container-section")}>
        <span className={cx("title-section")}>Mới Phát Hành</span>
        <div className={cx("nav-new")}>
          <button className={cx("nav-btn", { active: isActive })}>
            Tất cả
          </button>
          <button className={cx("nav-btn")}>Việt Nam</button>
          <button className={cx("nav-btn")}>Quốc Tế</button>
        </div>
        <div className={cx("container-musics")}>
          {/* {response.map((music, index) => (
            <div className={cx("container-colum")}>
              <div className={cx("music")}>
                <div className={cx("img-music")}>
                  <img
                    src={music.data.items[3].items.all[index].thumbnail}
                    alt=""
                  />
                  <div className={cx("opacity")}></div>
                  <button className={cx("btn-play")}>
                    <FontAwesomeIcon icon={faPlay} />
                  </button>
                </div>
                <div className={cx("inf")}>
                  <h5 className={cx("name-music")}>Không Chờ Đợi Nữa</h5>
                  <span className={cx("singer")}>Khải</span>
                  <span className={cx("time")}>Hôm qua</span>
                </div>
                <button className={cx("btn-more")}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </div>
            </div>
          ))} */}
          <div className={cx("container-colum")}>
            <div className={cx("music")}>
              <div className={cx("img-music")}>
                <img
                  src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/f/b/6/9fb6bec2bcf4e9e73cc1470533757956.jpg"
                  alt=""
                />
                <div className={cx("opacity")}></div>
                <button className={cx("btn-play")}>
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </div>
              <div className={cx("inf")}>
                <h5 className={cx("name-music")}>Không Chờ Đợi Nữa</h5>
                <span className={cx("singer")}>Khải</span>
                <span className={cx("time")}>Hôm qua</span>
              </div>
              <button className={cx("btn-more")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </div>
            <div className={cx("music")}>
              <div className={cx("img-music")}>
                <img
                  src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/f/b/6/9fb6bec2bcf4e9e73cc1470533757956.jpg"
                  alt=""
                />
                <div className={cx("opacity")}></div>
                <button className={cx("btn-play")}>
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </div>
              <div className={cx("inf")}>
                <h5 className={cx("name-music")}>Không Chờ Đợi Nữa</h5>
                <span className={cx("singer")}>Khải</span>
                <span className={cx("time")}>Hôm qua</span>
              </div>
              <button className={cx("btn-more")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </div>
            <div className={cx("music")}>
              <div className={cx("img-music")}>
                <img
                  src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/f/b/6/9fb6bec2bcf4e9e73cc1470533757956.jpg"
                  alt=""
                />
                <div className={cx("opacity")}></div>
                <button className={cx("btn-play")}>
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </div>
              <div className={cx("inf")}>
                <h5 className={cx("name-music")}>Không Chờ Đợi Nữa</h5>
                <span className={cx("singer")}>Khải</span>
                <span className={cx("time")}>Hôm qua</span>
              </div>
              <button className={cx("btn-more")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </div>

            <div className={cx("music")}>
              <div className={cx("img-music")}>
                <img
                  src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/f/b/6/9fb6bec2bcf4e9e73cc1470533757956.jpg"
                  alt=""
                />
                <div className={cx("opacity")}></div>
                <button className={cx("btn-play")}>
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </div>
              <div className={cx("inf")}>
                <h5 className={cx("name-music")}>Không Chờ Đợi Nữa</h5>
                <span className={cx("singer")}>Khải</span>
                <span className={cx("time")}>Hôm qua</span>
              </div>
              <button className={cx("btn-more")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </div>
          </div>

          <div className={cx("container-colum")}>
            <div className={cx("music")}>
              <div className={cx("img-music")}>
                <img
                  src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/f/b/6/9fb6bec2bcf4e9e73cc1470533757956.jpg"
                  alt=""
                />
                <div className={cx("opacity")}></div>
                <button className={cx("btn-play")}>
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </div>
              <div className={cx("inf")}>
                <h5 className={cx("name-music")}>Không Chờ Đợi Nữa</h5>
                <span className={cx("singer")}>Khải</span>
                <span className={cx("time")}>Hôm qua</span>
              </div>
              <button className={cx("btn-more")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </div>
            <div className={cx("music")}>
              <div className={cx("img-music")}>
                <img
                  src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/f/b/6/9fb6bec2bcf4e9e73cc1470533757956.jpg"
                  alt=""
                />
                <div className={cx("opacity")}></div>
                <button className={cx("btn-play")}>
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </div>
              <div className={cx("inf")}>
                <h5 className={cx("name-music")}>Không Chờ Đợi Nữa</h5>
                <span className={cx("singer")}>Khải</span>
                <span className={cx("time")}>Hôm qua</span>
              </div>
              <button className={cx("btn-more")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </div>
            <div className={cx("music")}>
              <div className={cx("img-music")}>
                <img
                  src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/f/b/6/9fb6bec2bcf4e9e73cc1470533757956.jpg"
                  alt=""
                />
                <div className={cx("opacity")}></div>
                <button className={cx("btn-play")}>
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </div>
              <div className={cx("inf")}>
                <h5 className={cx("name-music")}>Không Chờ Đợi Nữa</h5>
                <span className={cx("singer")}>Khải</span>
                <span className={cx("time")}>Hôm qua</span>
              </div>
              <button className={cx("btn-more")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </div>
            <div className={cx("music")}>
              <div className={cx("img-music")}>
                <img
                  src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/f/b/6/9fb6bec2bcf4e9e73cc1470533757956.jpg"
                  alt=""
                />
                <div className={cx("opacity")}></div>
                <button className={cx("btn-play")}>
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </div>
              <div className={cx("inf")}>
                <h5 className={cx("name-music")}>Không Chờ Đợi Nữa</h5>
                <span className={cx("singer")}>Khải</span>
                <span className={cx("time")}>Hôm qua</span>
              </div>
              <button className={cx("btn-more")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </div>
          </div>

          <div className={cx("container-colum")}>
            <div className={cx("music")}>
              <div className={cx("img-music")}>
                <img
                  src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/f/b/6/9fb6bec2bcf4e9e73cc1470533757956.jpg"
                  alt=""
                />
                <div className={cx("opacity")}></div>
                <button className={cx("btn-play")}>
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </div>
              <div className={cx("inf")}>
                <h5 className={cx("name-music")}>Không Chờ Đợi Nữa</h5>
                <span className={cx("singer")}>Khải</span>
                <span className={cx("time")}>Hôm qua</span>
              </div>
              <button className={cx("btn-more")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </div>
            <div className={cx("music")}>
              <div className={cx("img-music")}>
                <img
                  src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/f/b/6/9fb6bec2bcf4e9e73cc1470533757956.jpg"
                  alt=""
                />
                <div className={cx("opacity")}></div>
                <button className={cx("btn-play")}>
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </div>
              <div className={cx("inf")}>
                <h5 className={cx("name-music")}>Không Chờ Đợi Nữa</h5>
                <span className={cx("singer")}>Khải</span>
                <span className={cx("time")}>Hôm qua</span>
              </div>
              <button className={cx("btn-more")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </div>
            <div className={cx("music")}>
              <div className={cx("img-music")}>
                <img
                  src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/f/b/6/9fb6bec2bcf4e9e73cc1470533757956.jpg"
                  alt=""
                />
                <div className={cx("opacity")}></div>
                <button className={cx("btn-play")}>
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </div>
              <div className={cx("inf")}>
                <h5 className={cx("name-music")}>Không Chờ Đợi Nữa</h5>
                <span className={cx("singer")}>Khải</span>
                <span className={cx("time")}>Hôm qua</span>
              </div>
              <button className={cx("btn-more")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </div>
            <div className={cx("music")}>
              <div className={cx("img-music")}>
                <img
                  src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/f/b/6/9fb6bec2bcf4e9e73cc1470533757956.jpg"
                  alt=""
                />
                <div className={cx("opacity")}></div>
                <button className={cx("btn-play")}>
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </div>
              <div className={cx("inf")}>
                <h5 className={cx("name-music")}>Không Chờ Đợi Nữa</h5>
                <span className={cx("singer")}>Khải</span>
                <span className={cx("time")}>Hôm qua</span>
              </div>
              <button className={cx("btn-more")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
