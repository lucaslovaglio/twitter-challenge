import {ApiService} from "../api.service";
import {FeedService} from "./feed.service";
import {FeedTabs} from "../../enums/feed-tabs.enum";

export class FeedServiceHttp extends FeedService {
    private apiService: ApiService = new ApiService();
    private collection: string = 'feed';
    async getTweets(tab: FeedTabs) {
        const response = await this.apiService.get(`${this.collection}/tab/${tab}`);
        return response.data;
    }

    async getTweet(tweetId: string) {
        const response = await this.apiService.get(`${this.collection}/${tweetId}`);
        return response.data;
    }

    async likeTweet(tweetId: number, isLiking: boolean) {
        await this.apiService.put(`${this.collection}/like/${tweetId}`, {isLiking: isLiking});
    }

    async retweetTweet(tweetId: number, isRetweeting: boolean) {
        await this.apiService.put(`${this.collection}/retweet/${tweetId}`, {isRetweeting: isRetweeting});
    }
}