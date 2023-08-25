import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';

const cs = classNames.bind(style);

function Sidebar() {
    return ( 
        <aside className={cs('wrapper')}> 
            <h2>sizebar</h2>
        </aside>
    );
}

export default Sidebar;