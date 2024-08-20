import {User} from "../../interfaces/user.interface";

export abstract class RecommendationsService {
    abstract getRecommendedUsers(): Promise<User[]>;

    abstract addRecommendedUser(user: User): Promise<void>;
}