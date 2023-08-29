import style from "./Popper.module.scss";
import classNames from "classnames/bind";

const cs = classNames.bind(style);

function Wrapper({children}) {
    return <div className={cs("wrapper")}>
        {children}
    </div>
}

export default Wrapper;