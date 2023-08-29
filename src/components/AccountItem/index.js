import style from "./AcountItem.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cs = classNames.bind(style);

function AccountItem() {
  return (
    <div className={cs("wrapper")}>
      <img
        className={cs("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8ba86992f7c5efaab437abed236f3cd6~c5_100x100.jpeg?x-expires=1693396800&x-signature=GKMpCPDUsnLSaI%2FNkVJPxTQd%2Fh8%3D"
        alt="avt"
      />
      <div className={cs("info")}>
        <p className={cs("name")}>
          <span>gai dep</span>
          <FontAwesomeIcon className={cs("check")} icon={faCircleCheck} />
        </p>
        <span className={cs("user-name")}>gai-dep-beauty</span>
      </div>
    </div>
  );
}

export default AccountItem;
