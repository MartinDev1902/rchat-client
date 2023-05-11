import styles from "./LeftSidebar.module.sass";
import Logo from "../ui/Logo";
import Avatar from "../Avatar/Avatar";
import ChatItem from "../ChatItem/ChatItem";
import {Link} from "react-router-dom";
import React from "react";

const LeftSidebar = ({openPopup}) => {
    const user = 'https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg'

    const chats = [
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU',
            firstName: 'Aliaksandr',
            lastName: 'Martsinets',
            message: 'Hello! I was glad to meet you',
            hasNewMessage: true
        },
        {
            image: 'https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg',
            firstName: 'Natallia',
            lastName: 'Zhgun',
            message: 'I made a cake',
            hasNewMessage: true
        },
        {
            image: 'https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_94f12fbf25.jpg',
            firstName: 'John',
            lastName: 'Doe',
            message: 'Fuck off',
            hasNewMessage: false
        },
        {
            image: 'https://www.edarabia.com/wp-content/uploads/2015/11/7-ways-to-become-the-person-everyone-respects.jpg',
            firstName: 'Egor',
            lastName: 'Bersaev',
            message: 'Hello! I was glad to meet you',
            hasNewMessage: true
        },
        {
            image: 'https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg',
            firstName: 'Josefina',
            lastName: 'Mskula',
            message: 'I made a cake',
            hasNewMessage: true
        },
        {
            image: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
            firstName: 'Jony',
            lastName: 'Bones',
            message: 'Fuck off',
            hasNewMessage: false
        },


    ]
    return (
        <div className={styles.leftSidebar}>
            <div className={styles.leftSidebarHeader}>
                <Logo/>
                <div onClick={openPopup}><Avatar image={user} alt="User name" size="small"/></div>

            </div>

            <div className={styles.search}>
                <input type="text" placeholder="Search"/>
            </div>

            <div className={styles.chatList}>
                {chats.map((item, index) => <Link to={`/chat/${index}`} key={index}><ChatItem image={item.image} firstName={item.firstName} lastName={item.lastName} message={item.message} hasNewMessage={item.hasNewMessage}/></Link>)}

            </div>
        </div>
    )
}

export default LeftSidebar
