import styles from './ChatHeader.module.sass'
import Avatar from "../Avatar/Avatar";

const ChatHeader = () => {
    const image = 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
    return(
        <div className={styles.chatHeader}>
            <div className={styles.userInfo}>
                <Avatar image={image} alt={'User'} size="small"/>
                <div className={styles.userInfoContent}>
                    <div className={styles.userName}>Aliaksandr Martsinets</div>
                    <div className={styles.userOnlineStatus}>Online</div>
                </div>
            </div>
            <div>
                <svg width="6" height="20" viewBox="0 0 6 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 17C1 18.1 1.9 19 3 19C4.1 19 5 18.1 5 17C5 15.9 4.1 15 3 15C1.9 15 1 15.9 1 17ZM1 3C1 4.1 1.9 5 3 5C4.1 5 5 4.1 5 3C5 1.9 4.1 1 3 1C1.9 1 1 1.9 1 3ZM1 10C1 11.1 1.9 12 3 12C4.1 12 5 11.1 5 10C5 8.9 4.1 8 3 8C1.9 8 1 8.9 1 10Z" stroke="#313131" strokeWidth="1.5"/>
                </svg>
            </div>
        </div>
    )
}

export default ChatHeader;
