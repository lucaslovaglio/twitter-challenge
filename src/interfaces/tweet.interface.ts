import {User} from "./user.interface";
import {Reaction} from "./reaction.interface";
import {Comment} from "./comment.interface";

export interface Tweet {
    id: string;
    author: User;
    content: string;
    createdAt: string;
    reactions: Reaction[];
    comments: Comment[];
    images: string[];
}