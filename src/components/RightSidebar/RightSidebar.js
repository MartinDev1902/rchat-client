import styles from './RightSidebar.module.sass'
import Avatar from "../Avatar/Avatar";

const RightSidebar = ({chatID}) => {
    const image = 'https://ichef.bbci.co.uk/news/976/cpsprodpb/153FD/production/_126973078_whatsubject.jpg'
    console.log(chatID)
    return (
        <div className={styles.rightSidebar}>
            <Avatar image={image} alt={'Elon Musk'} size="big"/>
            <div className={styles.rightSidebarName}>Aliaksandr Martsinets</div>
            <div className={styles.rightSidebarContact}>martin.new1902@gmail.com</div>
            <div className={styles.rightSidebarLocation}>New York, United States</div>
            <p className={styles.rightSidebarStatus}>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>

            <div className={styles.rightSidebarSocial}>
                <div>Social medias</div>
                <ul>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Facebook</a></li>
                </ul>
            </div>

            <div className={styles.rightSidebarInterests}>
                <div>Interests</div>
                <ul>
                    <li><a href="#" target="_blank">Cooking</a></li>
                    <li><a href="#" target="_blank">Travelling</a></li>
                    <li><a href="#" target="_blank">Animals</a></li>
                    <li><a href="#" target="_blank">Reading</a></li>
                </ul>
            </div>
        </div>
    )
}

export default RightSidebar;
