import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faMusic,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const SIDE_BAR = [
  {
    title: "Cá nhân",
    leftIcon: <FontAwesomeIcon icon={faMusic} />,
    top: true,
  },
  {
    title: "Khám phá",
    leftIcon: <FontAwesomeIcon icon={faMusic} />,
    to: "/",
    top: true,
  },
  {
    title: "#zingchart",
    leftIcon: <FontAwesomeIcon icon={faMusic} />,
    rightIcon: <FontAwesomeIcon icon={faCirclePlay} />,
    top: true,
    to: "/zing-chart",
  },
  {
    title: "Radio",
    leftIcon: <FontAwesomeIcon icon={faMusic} />,
    rightIcon: <FontAwesomeIcon icon={faCirclePlay} />,
    to: "/Radio",
    top: true,
  },
  {
    title: "Theo dõi",
    leftIcon: <FontAwesomeIcon icon={faMusic} />,
    top: true,
  },
  {
    title: "Nhạc mới",
    leftIcon: <FontAwesomeIcon icon={faMusic} />,
    rightIcon: <FontAwesomeIcon icon={faCirclePlay} />,
    to: "/newmusic",
    bottom: true,
  },
  {
    title: "Thể loại",
    leftIcon: <FontAwesomeIcon icon={faMusic} />,
    to: "/hub",
    bottom: true,
  },
  {
    title: "Top 100",
    leftIcon: <FontAwesomeIcon icon={faMusic} />,
    to: "/top100",
    bottom: true,
  },
  {
    title: "MV",
    leftIcon: <FontAwesomeIcon icon={faMusic} />,
    to: "/mv",
    bottom: true,
  },
];

export default SIDE_BAR;
