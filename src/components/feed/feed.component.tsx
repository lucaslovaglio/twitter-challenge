import TweetComponent from "../tweet/tweet.component";
import {Tweet} from "../../interfaces/tweet.interface";
import {useEffect, useState} from "react";
import {FeedService} from "../../services/feed/feed.service";
import {FeedServiceMock} from "../../services/feed/feed.service.mock";
import styles from './feed.module.css';
import {useNavigate} from 'react-router-dom';


const FeedComponent = () => {
    const [tweets, setTweets] = useState<Tweet[]>([]);
    const feedService: FeedService = new FeedServiceMock();
    const navigate = useNavigate();

    useEffect(() => {
        fetchTweets();
        console.log('Tweets:', tweets);
    }, []);

    async function fetchTweets() {
        await feedService.getTweets()
            .then(tweets => setTweets(tweets))
            .catch(error => console.error('Error fetching tweets:', error));
    }

    const handleTweetClick = (tweetId: string) => {
        navigate(`/tweet/${tweetId}`);
    }
    return (
        <div className={styles.container}>
            <h5 className={styles.title}>Home</h5>
            {tweets.map(tweet => <TweetComponent tweet={tweet} key={tweet.id} onClick={handleTweetClick}/>)}
            {/*<TweetComponent tweet={tweets[0]}/>*/}
        </div>
    );
}

export default FeedComponent;