import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faBan,
  faCircleInfo,
  faCirclePlay,
  faFileLines,
  faPhone,
  faRectangleAd,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const MENU_LIST = [
  {
    title: "Danh sách chặn",
    icon: <FontAwesomeIcon icon={faBan} />,
    top: true,
  },
  {
    title: "Chất lượng nhạc",
    icon: <FontAwesomeIcon icon={faBan} />,
    icon_sub: <FontAwesomeIcon icon={faAngleRight} />,
    top: true,
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
    icon_sub: <FontAwesomeIcon icon={faAngleRight} />,
    top: true,
    children: [
      {
        content: "Luôn phát nhạc toàn màn hình",
      },
      {
        content: "Hiệu ứng",
      },
    ],
  },
  {
    title: "Giới thiệu",
    icon: <FontAwesomeIcon icon={faCircleInfo} />,
    bottom: true,
  },
  {
    title: "Liên hệ",
    icon: <FontAwesomeIcon icon={faPhone} />,
    bottom: true,
  },
  {
    title: "Quảng cáo",
    icon: <FontAwesomeIcon icon={faRectangleAd} />,
    bottom: true,
  },
  {
    title: "Thỏa thuận sử dụng",
    icon: <FontAwesomeIcon icon={faFileLines} />,
    bottom: true,
  },
  {
    title: "Chính sách bảo mật",
    icon: <FontAwesomeIcon icon={faShieldHalved} />,
    bottom: true,
  },
];

export default MENU_LIST;
