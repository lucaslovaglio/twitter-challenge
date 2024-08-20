import {Tweet} from "../../interfaces/tweet.interface";
import styles from './tweet.module.css';
import TweetHeader from "./tweet-header/tweet-header.component";
import TweetContent from "./tweet-content/tweet-content.component";
import TweetActions from "./tweet-actions/tweet-actions.component";
import TweetImage from "./tweet-image/tweet-image.component";

interface TweetProps {
    tweet: Tweet;
}

const TweetComponent: React.FC<TweetProps> = ({ tweet }) => {
    console.log('Tweet:', tweet);
    return (
        <div className={styles.container0}>
        <div className={styles.container}>
            <div className={styles.header}>
                <TweetHeader tweet={tweet}/>
            </div>
            <div className={styles.content}>
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