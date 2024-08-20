import {Tweet} from "../../interfaces/tweet.interface";

export abstract class FeedService {
    abstract getTweets(): Promise<Tweet[]>;

    abstract likeTweet(tweetId: number, isLiking: boolean): Promise<void>;

    abstract retweetTweet(tweetId: number, isRetweeting: boolean): Promise<void>;
}