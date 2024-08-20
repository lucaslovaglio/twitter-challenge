import {User} from "./user.interface";

export interface Comment {
    id: string;
    author: User;
    content: string;
}