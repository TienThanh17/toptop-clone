import Tippy from "@tippyjs/react/headless";
import * as React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import style from "./Header.module.scss";
import images from "~/assets/images";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";

const cs = classNames.bind(style);

function Header() {
  const [searchResult, setSearchResult] = React.useState([]);

  React.useEffect(() => {
    // setSearchResult("ket qua");
  }, []);

  return (
    <header className={cs("wrapper")}>
      <div className={cs("inner")}>
        <img src={images.logo} alt="TopTop" />

        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cs("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <div className={cs("search-title")}>Following</div>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
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
        </Tippy>

        <div className={cs("action")}>
          <Button upload icon={<FontAwesomeIcon icon={faPlus} />}>
            Upload
          </Button>
          <Button primary>Log in</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
