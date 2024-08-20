import styles from "../../recommendations/recommended-user/recommended-user.module.css";
import React from "react";
import {Tweet} from "../../../interfaces/tweet.interface";

interface DetailsHeaderProps {
    tweet: Tweet;
}

const DetailsHeader: React.FC<DetailsHeaderProps> = ({ tweet }) => {
    const user = tweet.author;
    return (
        <div className={styles.container}>
            <img src={user.profilePicture} alt={user.username} className={styles.profilePicture}/>
            <div className={styles.userInfo}>
                <div className={styles.name}>{user.firstName} {user.lastName}</div>
                <div className={styles.username}>@{user.username}</div>
            </div>
        </div>
    );
}

export default DetailsHeader;