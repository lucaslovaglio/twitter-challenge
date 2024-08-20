import TweetComponent from "../tweet/tweet.component";
import {Tweet} from "../../interfaces/tweet.interface";
import {useEffect, useState} from "react";
import {FeedService} from "../../services/feed/feed.service";
import {FeedServiceMock} from "../../services/feed/feed.service.mock";
import styles from './feed.module.css';
import {useNavigate} from 'react-router-dom';
import Texts from "./constants/texts.constant";
import CreateTweetComponent from "../create-tweet/create-tweet.component";
import {FeedTabs} from "../../enums/feed-tabs.enum";
import TabSelector from "../tab-selector/tab-selector.component";


const FeedComponent = () => {
    const [tweets, setTweets] = useState<Tweet[]>([]);
    const [selectedTab, setSelectedTab] = useState<FeedTabs>(FeedTabs.FOR_YOU);
    const feedService: FeedService = new FeedServiceMock();
    const navigate = useNavigate();

    useEffect(() => {
        fetchTweets();
        console.log('Tweets:', tweets);
    }, [selectedTab]);

    async function fetchTweets() {
        await feedService.getTweets(selectedTab)
            .then(tweets => setTweets(tweets))
            .catch(error => console.error('Error fetching tweets:', error));
    }

    const handleTweetClick = (tweetId: string) => {
        navigate(`/tweet/${tweetId}`);
    }
    return (
        <div className={styles.container}>
            <h5 className={styles.title}>{Texts.TITLE}</h5>
            <TabSelector selectedTab={selectedTab} onSelectTab={setSelectedTab} />
            <CreateTweetComponent/>
            {tweets.map(tweet => <TweetComponent tweet={tweet} key={tweet.id} onClick={handleTweetClick}/>)}
        </div>
    );
}

export default FeedComponent;