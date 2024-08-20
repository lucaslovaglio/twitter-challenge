import {Tweet} from "../../interfaces/tweet.interface";
import styles from './tweet-details.module.css';
import TweetHeader from "../common/tweet-header/tweet-header.component";
import TweetContent from "../common/tweet-content/tweet-content.component";
import TweetActions from "../common/tweet-actions/tweet-actions.component";
import TweetImage from "../common/tweet-image/tweet-image.component";
import React from "react";
import DetailsHeader from "./details-header/details-header.component";

interface TweetProps {
    tweet: Tweet;
}

const TweetDetailsComponent: React.FC<TweetProps> = ({ tweet}) => {
    function formatDate(dateString: string): string {
        const options = {
            hour: 'numeric' as const,
            minute: 'numeric' as const,
            hour12: true,
        };

        const date = new Date(dateString);
        const time = date.toLocaleTimeString('en-US', options);
        const datePart = date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });

        return `${time.toUpperCase()}  ${datePart}`;
    }



    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <DetailsHeader tweet={tweet}/>
                </div>
                <div className={styles.content}>
                    <TweetContent tweet={tweet} />
                </div>
                {tweet.images?.map((image, index) => (
                    <div key={index}>
                        <TweetImage src={image}/>
                    </div>
                ))}
                <div className={styles.date}>
                    {formatDate(tweet.createdAt)}
                </div>
                <div className={styles.actions}>
                    <TweetActions tweet={tweet} />
                </div>
            </div>
        </div>
    );
}

export default TweetDetailsComponent;