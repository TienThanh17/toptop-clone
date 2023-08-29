import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import AccountItem from '~/components/AccountItem';

const cs = classNames.bind(style);

function Sidebar() {
    return ( 
        <aside className={cs('wrapper')}> 
            <h2>sizebar</h2>
            <AccountItem />
            <AccountItem />
            <AccountItem />
        </aside>
    );
}

export default Sidebar;