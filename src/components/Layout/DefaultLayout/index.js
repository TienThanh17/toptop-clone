import classNames from "classnames/bind";
import Header from "~/components/Layout/components/Header";
import Sidebar from "./Sidebar";
import style from './DefaultLayout.module.scss';

const cs = classNames.bind(style);

function DefaultLayout({ children }) {
  return (
    <div className={cs('wrapper')}>
      <Header />
      <div className={cs('container')}>
        <Sidebar />
        <div className={cs('content')}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
