import styles from './Chat.module.sass'
import {useParams} from "react-router-dom";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import MessageItem from "../../components/MessageItem/MessageItem";
import Popup from "../../components/Popup/Popup";
import {useState} from "react";

const Chat = () => {
    const [popupState, setPopupState] = useState(false);
    const {id} = useParams();

    const openPopup = () => setPopupState(true)

    const closePopup = () => setPopupState(false)

    const messages = [
        {
            me: true,
            message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        },
        {
            me: false,
            message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'

        },
        {
            me: false,
            message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. ',
        },
        {
            me: true,
            message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
        },
        {
            me: false,
            message: 'It is a long established fact that '
        }
    ]
    return (
        <div className={styles.chat}>
            <LeftSidebar openPopup={openPopup}/>
            <div className={styles.chatArea}>
                {id ?<> <ChatHeader/>
                    <div className={styles.messagesArea}>
                        {messages.map((item, index) => (
                            <MessageItem key={index} me={item.me} message={item.message}/>
                        ))}

                    </div>


                    <div className={styles.messageForm}>
                    <input type="text" placeholder="Message"/>
                    <button>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.39046 9.99867H8.79046M7.46046 2.22867L16.0205 6.50867C19.8605 8.42867 19.8605 11.5687 16.0205 13.4887L7.46046 17.7687C1.70046 20.6487 -0.649541 18.2887 2.23046 12.5387L3.10046 10.8087C3.32046 10.3687 3.32046 9.63867 3.10046 9.19867L2.23046 7.45867C-0.649541 1.70867 1.71046 -0.65133 7.46046 2.22867Z" stroke="#5C75F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </button>
                    </div></> : <div className={styles.emptyChat}>Select chat to start conversation</div>}

                </div>
            <RightSidebar chatID={id}/>
            {popupState ? <Popup closePopup={closePopup}/> : null}

        </div>
    )
}

export default Chat;
