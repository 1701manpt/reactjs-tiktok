import styles from './Sidebar.module.scss';
import clsx from 'clsx';

function Sidebar() {
    return (
        <aside className={clsx(styles.wrapper)}>
            <h1>Sidebar</h1>
        </aside>
    );
}

export default Sidebar;
