import React from "react";
import Button from "../common/button/button.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./nav-bar.module.css";
import { ReactComponent as TwitterLogo } from "../common/icons/twitter-logo.svg";
import Texts from "./constants/texts.constant";
import { ReactComponent as HomeIcon } from "../common/icons/home-icon.svg";
import { ReactComponent as ExploreIcon } from "../common/icons/explore-icon.svg";
import { ReactComponent as MessageIcon } from "../common/icons/message-icon.svg";
import { ReactComponent as ProfileIcon } from "../common/icons/profile-icon.svg";
import {useNavigate} from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.sidebar}>
            <div className={styles.menu}>
                <div className={styles.iconTwitter}>
                    <TwitterLogo/>
                </div>
                <div className={styles.buttons}>
                    <Button
                        icon={<HomeIcon/>}
                        text={Texts.HOME}
                        onClick={() => navigate("/")}
                        className={styles.button}
                    />
                    <Button
                        icon={<ExploreIcon/>}
                        text={Texts.EXPLORE}
                        onClick={() => console.log("Explore")}
                        className={styles.button}
                    />
                    <Button
                        icon={<MessageIcon/>}
                        text={Texts.MESSAGE}
                        onClick={() => console.log("Message")}
                        className={styles.button}
                    />
                    <Button
                        icon={<ProfileIcon/>}
                        text={Texts.PROFILE}
                        onClick={() => console.log("Profile")}
                        className={styles.button}
                    />
                </div>
                <Button
                    text={Texts.TWEET}
                    onClick={() => console.log("Tweet")}
                    className={styles.tweetButton}
                />
            </div>
        </div>
    );
}

export default Sidebar;
