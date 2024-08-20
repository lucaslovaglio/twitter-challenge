import {RecommendationsService} from "./recommendations.service";
import {User} from "../../interfaces/user.interface";

export class RecommendationsServiceMock extends RecommendationsService {
    async getRecommendedUsers(): Promise<User[]> {
        return [
            {
                id: "1",
                firstName: "John",
                lastName: "Doe",
                username: "john_doe",
                profilePicture: "https://randomuser.me/api/portraits/men/15.jpg",
                private: false,
            },
            {
                id: "2",
                firstName: "Jane",
                lastName: "Smith",
                username: "jane_smith",
                profilePicture: "https://randomuser.me/api/portraits/women/25.jpg",
                private: true,
            },
            {
                id: "3",
                firstName: "Michael",
                lastName: "Johnson",
                username: "michael_j",
                profilePicture: "https://randomuser.me/api/portraits/men/35.jpg",
                private: false,
            },
            {
                id: "4",
                firstName: "Emily",
                lastName: "Brown",
                username: "emily_brown",
                profilePicture: "https://randomuser.me/api/portraits/women/45.jpg",
                private: true,
            },
            {
                id: "5",
                firstName: "David",
                lastName: "Wilson",
                username: "david_wilson",
                profilePicture: "https://randomuser.me/api/portraits/men/55.jpg",
                private: false,
            },
        ];
    }

    async addRecommendedUser(user: User): Promise<void> {
        return Promise.resolve(undefined);
    }
}
