import styles from "./recommended-user.module.css";
import React from "react";
import {User} from "../../../interfaces/user.interface";
import Button from "../../common/button/button.component";
import Texts from "../constants/texts.constant";

export interface RecommendedUserProps {
    user: User;
    onClick: () => void;
}

const RecommendedUser: React.FC<RecommendedUserProps> = ({ user, onClick }) => {
    return (
        <div className={styles.container}>
            <img src={user.profilePicture} alt={user.username} className={styles.profilePicture} />
            <div className={styles.userInfo}>
                <div className={styles.name}>{user.firstName} {user.lastName}</div>
                <div className={styles.username}>@{user.username}</div>
            </div>
            <Button className={styles.actionButton} onClick={onClick} text={Texts.ACTION}/>
        </div>
    );
}

export default RecommendedUser;