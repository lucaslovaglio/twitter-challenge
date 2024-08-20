import React from "react";
import Button from "../common/button/button.component"; // Importa el componente Button que ya tienes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./nav-bar.module.css"; // Archivo CSS para la sidebar
import { ReactComponent as TwitterLogo } from "../common/icons/twitter-logo.svg";
import Texts from "./constants/texts.constant"; // Importa el archivo de textos

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.menu}>
                <div className={styles.iconTwitter}>
                    <TwitterLogo/>
                </div>
                <div className={styles.buttons}>
                    <Button
                        icon={<FontAwesomeIcon icon={faHome} />}
                        text={Texts.HOME}
                        onClick={() => console.log("Home")}
                        className={styles.button}
                    />
                    <Button
                        icon={<FontAwesomeIcon icon={faSearch} />}
                        text={Texts.EXPLORE}
                        onClick={() => console.log("Explore")}
                        className={styles.button}
                    />
                    <Button
                        icon={<FontAwesomeIcon icon={faEnvelope} />}
                        text={Texts.MESSAGE}
                        onClick={() => console.log("Message")}
                        className={styles.button}
                    />
                    <Button
                        icon={<FontAwesomeIcon icon={faUser} />}
                        text={Texts.PROFILE}
                        onClick={() => console.log("Profile")}
                        className={styles.button}
                    />
                </div>
                <Button
                    text={Texts.TWEET}
                    onClick={() => console.log("Tweet")}
                    className={styles.tweetButton} // Clase específica para el botón Tweet
                />
            </div>
        </div>
    );
}

export default Sidebar;
