import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import style from "./Header.module.scss";
import images from "~/assets/images";
const cs = classNames.bind(style);

function Header() {
  return (
    <header className={cs("wrapper")}>
      <div className={cs("inner")}>
        <img src={images.logo} alt="TopTop" />
        <div className={cs("search")}>
          <input type="text" placeholder="Search..." spellCheck={false} />
          <button className={cs("clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cs("loading")} icon={faSpinner} />
          <button className={cs("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cs("action")}></div>
      </div>
    </header>
  );
}

export default Header;
