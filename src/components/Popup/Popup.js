import styles from './Popup.module.sass'
import ProfileInfoTab from "../SettingTabs/ProfileInfoTab";
import ChangePasswordTab from "../SettingTabs/ChangePasswordTab";
import SocialMediasTab from "../SettingTabs/SocialMediasTab";
import InterestsTab from "../SettingTabs/InterestsTab";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {authLogout, logoutUser} from "../../store/reducers/auth";
const Popup = ({closePopup}) => {
    const [activeTab, setActiveTab] = useState('profileInfo');
    const dispath = useDispatch()

    return(
        <div className={styles.popup}>
            <div className={styles.popupWindow}>
                <div className={styles.popupSidebar}>
                    <div className={styles.popupTitle}>Settings</div>
                    <ul>
                        <li onClick={() => setActiveTab('profileInfo')}>Profile Info</li>
                        <li onClick={() => setActiveTab('changePassword')}>Change password</li>
                        <li onClick={() => setActiveTab('socialMedias')}>Social medias</li>
                        <li onClick={() => setActiveTab('interests')}>Interests</li>
                        <li onClick={() => dispath(authLogout())}>LogOut</li>
                    </ul>
                </div>
                <div className={styles.popupContent}>
                   <div onClick={closePopup} className={styles.popupClose}></div>
                    <div>
                        {
                            activeTab === 'profileInfo' ? <ProfileInfoTab/>
                                : activeTab === 'changePassword' ? <ChangePasswordTab/>
                                    : activeTab === 'socialMedias' ? <SocialMediasTab/>
                                        : activeTab === 'interests' ? <InterestsTab/> : null
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup;
