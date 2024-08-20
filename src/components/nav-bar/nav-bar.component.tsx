import React from "react";
import Button from "../common/button/button.component"; // Importa el componente Button que ya tienes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./nav-bar.module.css"; // Archivo CSS para la sidebar
import { ReactComponent as TwitterLogo } from "../common/icons/twitter-logo.svg";

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
                        text="Home"
                        onClick={() => console.log("Home")}
                        className={styles.button}
                    />
                    <Button
                        icon={<FontAwesomeIcon icon={faSearch} />}
                        text="Explore"
                        onClick={() => console.log("Explore")}
                        className={styles.button}
                    />
                    <Button
                        icon={<FontAwesomeIcon icon={faEnvelope} />}
                        text="Message"
                        onClick={() => console.log("Message")}
                        className={styles.button}
                    />
                    <Button
                        icon={<FontAwesomeIcon icon={faUser} />}
                        text="Profile"
                        onClick={() => console.log("Profile")}
                        className={styles.button}
                    />
                </div>
                <Button
                    text="Tweet"
                    onClick={() => console.log("Tweet")}
                    className={styles.tweetButton} // Clase específica para el botón Tweet
                />
            </div>
        </div>
    );
}

export default Sidebar;
