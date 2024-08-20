import {ApiService} from "../api.service";
import {FeedService} from "./feed.service";

export class FeedServiceHttp extends FeedService {
    private apiService: ApiService = new ApiService();
    private collection: string = 'feed';
    async getTweets() {
        const response = await this.apiService.get('feed');
        return response.data;
    }
    async likeTweet(tweetId: number, isLiking: boolean) {
        await this.apiService.put(`${this.collection}/like/${tweetId}`, {});
    }
    async retweetTweet(tweetId: number, isRetweeting: boolean) {
        await this.apiService.put(`${this.collection}/retweet/${tweetId}`, {});
    }
}