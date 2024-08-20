import {ReactionType} from "../enums/reaction-type.enum";
import {User} from "./user.interface";

export interface Reaction {
    id: string;
    user: Partial<User>;
    type: ReactionType;
}