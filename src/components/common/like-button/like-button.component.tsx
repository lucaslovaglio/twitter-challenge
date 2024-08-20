import React from "react";
import Button from "../button/button.component";
import LikeIcon from "./like-icon/like-icon.component";
import styles from "./like-button.module.css";

const LikeButton: React.FC = () => {
    return (
        <Button className={styles.likeButton} text={''} icon={<LikeIcon/>} onClick={()=>{}}/>
    );
}
export default LikeButton;