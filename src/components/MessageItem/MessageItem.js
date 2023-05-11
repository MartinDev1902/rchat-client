import styles from './MessageItem.module.sass'
const MessageItem = ({me, message}) => {
    const classes = [styles.messageItem, me ? styles.myMessage : styles.otherMessage]
    return(
        <div className={classes.join(' ')}>
            {message}
        </div>
    )
}

export default MessageItem
