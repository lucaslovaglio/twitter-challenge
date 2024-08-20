import React, {useEffect} from "react";
import withLayout from "../../hoc/withLayout/withLayout.hoc";
import styles from "../../components/feed/feed.module.css";
import Texts from "./constants/texts.constant";
import TweetDetailsComponent from "../../components/tweet-details/tweet-details.component";
import {useParams} from "react-router-dom";
import {FeedService} from "../../services/feed/feed.service";
import {FeedServiceMock} from "../../services/feed/feed.service.mock";
import {Tweet} from "../../interfaces/tweet.interface";

const TweetDetailsPage: React.FC = () => {
    const { tweetId } = useParams<{ tweetId: string }>();
    const feedService: FeedService = new FeedServiceMock();
    const [tweet, setTweet] = React.useState<Tweet>();

    useEffect(() => {
        fetchTweet();
    }, [tweetId]);

    async function fetchTweet() {
        if (!tweetId)
            return;
        await feedService.getTweet(tweetId)
            .then(tweet => setTweet(tweet))
            .catch(error => console.error('Error fetching tweet:', error));
    }



    return (
        <div className={styles.container}>
            <h5 className={styles.title}>{Texts.TITLE}</h5>
            {tweet && (<TweetDetailsComponent tweet={tweet as Tweet} />)}
        </div>
    );
}

export default withLayout(TweetDetailsPage);