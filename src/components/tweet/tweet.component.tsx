import {Tweet} from "../../interfaces/tweet.interface";
import styles from './tweet.module.css';
import TweetHeader from "../common/tweet-header/tweet-header.component";
import TweetContent from "../common/tweet-content/tweet-content.component";
import TweetActions from "../common/tweet-actions/tweet-actions.component";
import TweetImage from "../common/tweet-image/tweet-image.component";

interface TweetProps {
    tweet: Tweet;
    onClick: (tweetId: string) => void;
}

const TweetComponent: React.FC<TweetProps> = ({ tweet , onClick}) => {
    return (
        <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.header}>
                <TweetHeader tweet={tweet}/>
            </div>
            <div className={styles.content} onClick={() => onClick(tweet.id)}>
                <TweetContent tweet={tweet} />
            </div>
            {tweet.images?.map((image, index) => (
                <div key={index}>
                    <TweetImage src={image}/>
                </div>
            ))}
            <div className={styles.actions}>
                <TweetActions tweet={tweet} />
            </div>
        </div>
        </div>
    );
}

export default TweetComponent;