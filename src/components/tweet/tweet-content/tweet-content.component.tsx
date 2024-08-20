import React from "react";
import {Tweet} from "../../../interfaces/tweet.interface";
import styles from './tweet-content.module.css';

interface TweetContentProps {
    tweet: Tweet;
}

const TweetContent: React.FC<TweetContentProps> = ({ tweet }) => {
    return (
        <div className={styles.container}>
            {tweet.content}
        </div>
    );
}

export default TweetContent;