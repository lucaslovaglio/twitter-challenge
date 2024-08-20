import {Tweet} from "../../interfaces/tweet.interface";
import {FeedTabs} from "../../enums/feed-tabs.enum";

export abstract class FeedService {
    abstract getTweets(tab: FeedTabs): Promise<Tweet[]>;

    abstract getTweet(tweetId: string): Promise<Tweet>;

    abstract likeTweet(tweetId: number, isLiking: boolean): Promise<void>;

    abstract retweetTweet(tweetId: number, isRetweeting: boolean): Promise<void>;
}