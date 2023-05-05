import styles from './Chat.module.sass'
import {useParams} from "react-router-dom";

const Chat = () => {
    const {id} = useParams();
    if(id) console.log(id)
    return (
        <div className={styles.chat}>Chat</div>
    )
}

export default Chat;
