import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart, faMessage, faRetweet} from '@fortawesome/free-solid-svg-icons';
import styles from './tweet-actions.module.css';
import {useEffect, useState} from "react";
import {FeedService} from "../../../services/feed/feed.service";
import {Tweet} from "../../../interfaces/tweet.interface";
import {FeedServiceMock} from "../../../services/feed/feed.service.mock";
import {ReactionType} from "../../../enums/reaction-type.enum";
import LikeButton from "../like-button/like-button.component";
import {FeedServiceHttp} from "../../../services/feed/feed.service.http";

interface TweetActionsProps {
    tweet: Tweet;
}

const TweetActions: React.FC<TweetActionsProps> = ({ tweet }) => {
    const [likes, setLikes] = useState<number>(0);
    const [retweets, setRetweets] = useState<number>(0);
    const [userLikes, setUserLikes] = useState<boolean>(false);
    const [userRetweets, setUserRetweets] = useState<boolean>(false);

    useEffect(() => {
        setLikes(countLikes());
        setRetweets(countRetweets());
        //habria que setear userLikes y userRetweets filtrando los user que reaccionaron y comparandolos con el actual
    }, [tweet]);

    const countLikes = (): number => {
        return tweet.reactions.filter(reaction => reaction.type === ReactionType.LOVE).length;
    };

    const countRetweets = (): number => {
        return tweet.reactions.filter(reaction => reaction.type === ReactionType.RETWEET).length;
    };


    const handleLike = async () => {
        const feedService = new FeedServiceHttp();
        const isLiking = !userLikes;

        setLikes(likes + (isLiking ? 1 : -1));
        setUserLikes(isLiking);
        await feedService.likeTweet(parseInt(tweet.id), isLiking)
            .catch(() => {
                console.error('Error al dar like al tweet')
                // setLikes(prevLikes => prevLikes - (isLiking ? 1 : -1));
                // setUserLikes(!isLiking);
            });
    }

    const handleRetweet = async () => {
        const feedService = new FeedServiceHttp();
        const isRetweeting = !userRetweets;

        setRetweets(retweets + (isRetweeting ? 1 : -1));
        setUserRetweets(isRetweeting);
        await feedService.retweetTweet(parseInt(tweet.id), isRetweeting)
            .catch(() => {
                console.error('Error al retwittear el tweet')
                // setRetweets(prevRetweets => prevRetweets - (isRetweeting ? 1 : -1));
                // setUserRetweets(!isRetweeting);
            });
    }

    return (
        <div className={styles.container}>
            {/*<LikeButton/>*/}
            <button className={styles.actionButton} onClick={() => {
            }}>
                <FontAwesomeIcon icon={faMessage} className={styles.actionIcon}/>
            </button>
            <span>{tweet.comments.length}</span>
            <button className={`${styles.actionButton} ${userLikes ? styles.liked : ''}`} onClick={handleLike}>
                <FontAwesomeIcon icon={faHeart} className={styles.actionIcon}/>
            </button>
            <span>{likes}</span>
            <button className={`${styles.actionButton} ${userRetweets ? styles.retweeted : ''}`}
                    onClick={handleRetweet}>
                <FontAwesomeIcon icon={faRetweet} className={styles.actionIcon}/>
            </button>
            <span>{retweets}</span>
        </div>
    );
}

export default TweetActions;