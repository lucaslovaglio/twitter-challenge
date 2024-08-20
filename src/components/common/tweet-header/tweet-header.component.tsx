import {Tweet} from "../../../interfaces/tweet.interface";
import styles from './tweet-header.module.css';

interface TweetHeaderProps {
    tweet: Tweet;
}

const TweetHeader: React.FC<TweetHeaderProps> = ({ tweet }) => {
    const formattedDate = new Date(tweet.createdAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
    }).toLowerCase();

    return (
        <div className={styles.header}>
            <img
                src={tweet.author.profilePicture}
                alt={`${tweet.author.firstName}'s profile`}
                className={styles.profilePicture}
            />
            <div className={styles.userInfo}>
                <span className={styles.authorName}>{tweet.author.firstName}</span>
                <span className={styles.username}>@{tweet.author.username}</span>
                <span className={styles.dot}>•</span>
                <span className={styles.date}>{formattedDate}</span>
            </div>
        </div>
    );
}

export default TweetHeader;