import styles from './ChatItem.module.sass'
import Avatar from "../Avatar/Avatar";

const ChatItem = ({image, firstName, lastName, message, hasNewMessage}) => {
    return(
        <div className={styles.chatItem}>
            <Avatar image={image}/>
            <div className={styles.chatItemContent}>
                <div className={styles.userName}>{firstName} {lastName}</div>
                <div className={styles.message}> {message}</div>

            </div>

            {hasNewMessage ? <div className={styles.indicator}></div> : null}


        </div>
    )
}

export default ChatItem
