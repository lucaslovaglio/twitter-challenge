import React, {useEffect, useRef, useState} from "react";
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
import MenuButton from "./menu-button/menu-button.component";

const Sidebar = () => {
    const navigate = useNavigate()


    return (
        <div className={styles.sidebar}>
            <div className={styles.menu}>
                <div className={styles.iconTwitter}>
                    <TwitterLogo/>
                </div>
                <div className={styles.buttons}>
                    <MenuButton
                        icon={<HomeIcon style={{minWidth:'24px'}}/>}
                        text={Texts.HOME}
                        onClick={() => navigate("/")}
                        className={styles.button}
                    />
                    <MenuButton
                        icon={<ExploreIcon style={{minWidth:'24px'}}/>}
                        text={Texts.EXPLORE}
                        onClick={() => console.log("Explore")}
                        className={styles.button}
                    />
                    <MenuButton
                        icon={<MessageIcon style={{minWidth:'24px'}}/>}
                        text={Texts.MESSAGE}
                        onClick={() => console.log("Message")}
                        className={styles.button}
                    />
                    <MenuButton
                        icon={<ProfileIcon style={{minWidth:'24px'}}/>}
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
