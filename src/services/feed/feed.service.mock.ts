import {Tweet} from "../../interfaces/tweet.interface";
import {FeedService} from "./feed.service";
import {FeedTabs} from "../../enums/feed-tabs.enum";

export class FeedServiceMock extends FeedService{
    private data: Tweet[] = [
        {
            "id": "post_1",
            "author": {
                "id": "user_1",
                "firstName": "John",
                "lastName": "Doe",
                "username": "GalacticExplorer42",
                "profilePicture": "https://randomuser.me/api/portraits/men/15.jpg",
                "private": false
            },
            "content": "Just spotted a UFO in my backyard! 👽 #OutOfThisWorld",
            "createdAt": "2024-01-25T09:00:00.000Z",
            "reactions": [
                {
                    "id": "reaction_1",
                    "user": {
                        "username": "StarGazer99",
                        "profilePicture": "https://randomuser.me/api/portraits/women/25.jpg",
                        "private": false
                    },
                    "type": "LOVE"
                },
                {
                    "id": "reaction_2",
                    "user": {
                        "username": "RocketeerX",
                        "profilePicture": "https://randomuser.me/api/portraits/men/35.jpg",
                        "private": false
                    },
                    "type": "RETWEET"
                }
            ],
            "comments": [
                {
                    "id": "comment_1",
                    "author": {
                        "id": "userC",
                        "firstName": "Jane",
                        "lastName": "Smith",
                        "username": "CometChaser",
                        "profilePicture": "https://randomuser.me/api/portraits/women/45.jpg",
                        "private": false
                    },
                    "content": "Wow! I wish I could see it too."
                }
            ],
            "images": ["https://random.imagecdn.app/600/400", "https://random.imagecdn.app/800/600"]
        },
        {
            "id": "post_2",
            "author": {
                "id": "user_2",
                "firstName": "Alice",
                "lastName": "Johnson",
                "username": "AstroExplorer88",
                "profilePicture": "https://randomuser.me/api/portraits/women/55.jpg",
                "private": false
            },
            "content": "Exploring the mysteries of the cosmos. Did you know about black holes? 🕳️ #SpaceFacts",
            "createdAt": "2024-01-25T09:15:00.000Z",
            "reactions": [
                {
                    "id": "reaction_3",
                    "user": {
                        "username": "MoonWalker77",
                        "profilePicture": "https://randomuser.me/api/portraits/men/65.jpg",
                        "private": false
                    },
                    "type": "LOVE"
                }
            ],
            "comments": [
                {
                    "id": "comment_2",
                    "author": {
                        "id": "userE",
                        "firstName": "Charlie",
                        "lastName": "Brown",
                        "username": "GalacticComedian",
                        "profilePicture": "https://randomuser.me/api/portraits/women/75.jpg",
                        "private": false
                    },
                    "content": "Black holes are so fascinating!"
                },
                {
                    "id": "comment_3",
                    "author": {
                        "id": "userF",
                        "firstName": "Diana",
                        "lastName": "Roberts",
                        "username": "QuasarQuipster",
                        "profilePicture": "https://randomuser.me/api/portraits/men/85.jpg",
                        "private": false
                    },
                    "content": "Tell us more about space facts!"
                }
            ],
            "images": ["https://random.imagecdn.app/700/500"]
        },
        {
            "id": "post_3",
            "author": {
                "id": "user_3",
                "firstName": "Ethan",
                "lastName": "Williams",
                "username": "CosmicVoyager",
                "profilePicture": "https://randomuser.me/api/portraits/men/12.jpg",
                "private": false
            },
            "content": "Interstellar road trip! 🚀 Where should I explore next? #GalacticAdventure",
            "createdAt": "2024-01-25T10:30:00.000Z",
            "reactions": [
                {
                    "id": "reaction_4",
                    "user": {
                        "username": "StellarDreamer",
                        "profilePicture": "https://randomuser.me/api/portraits/women/18.jpg",
                        "private": false
                    },
                    "type": "LOVE"
                }
            ],
            "comments": [
                {
                    "id": "comment_4",
                    "author": {
                        "id": "userG",
                        "firstName": "Olivia",
                        "lastName": "Miller",
                        "username": "NebulaNomad",
                        "profilePicture": "https://randomuser.me/api/portraits/women/22.jpg",
                        "private": false
                    },
                    "content": "How about exploring the Orion Nebula? It's mesmerizing!"
                }
            ],
            "images": ["https://random.imagecdn.app/750/550"]
        },
        {
            "id": "post_4",
            "author": {
                "id": "user_4",
                "firstName": "Jack",
                "lastName": "Taylor",
                "username": "CelestialJoker",
                "profilePicture": "https://randomuser.me/api/portraits/men/88.jpg",
                "private": false
            },
            "content": "Why did the astronaut break up with the alien? It needed space! 🌌😂 #CosmicJokes",
            "createdAt": "2024-01-25T11:45:00.000Z",
            "reactions": [
                {
                    "id": "reaction_5",
                    "user": {
                        "username": "GalacticGiggler",
                        "profilePicture": "https://randomuser.me/api/portraits/women/91.jpg",
                        "private": false
                    },
                    "type": "LOVE"
                }
            ],
            "comments": [
                {
                    "id": "comment_5",
                    "author": {
                        "id": "userH",
                        "firstName": "Sophia",
                        "lastName": "Clark",
                        "username": "CometComic",
                        "profilePicture": "https://randomuser.me/api/portraits/women/94.jpg",
                        "private": false
                    },
                    "content": "That's a good one! 😄"
                }
            ],
            "images": ["https://random.imagecdn.app/720/480"]
        },
        {
            "id": "post_6",
            "author": {
                "id": "user_6",
                "firstName": "Emma",
                "lastName": "Johnson",
                "username": "CosmicCrafter",
                "profilePicture": "https://randomuser.me/api/portraits/men/52.jpg",
                "private": false
            },
            "content": "Crafting a miniature galaxy in my backyard. 🌌✨ #DIYCosmos",
            "createdAt": "2024-01-25T13:15:00.000Z",
            "reactions": [
                {
                    "id": "reaction_7",
                    "user": {
                        "username": "StarryArtisan",
                        "profilePicture": "https://randomuser.me/api/portraits/women/63.jpg",
                        "private": false
                    },
                    "type": "LOVE"
                }
            ],
            "comments": [
                {
                    "id": "comment_7",
                    "author": {
                        "id": "userJ",
                        "firstName": "Liam",
                        "lastName": "Smith",
                        "username": "NebulaNovice",
                        "profilePicture": "https://randomuser.me/api/portraits/women/74.jpg",
                        "private": false
                    },
                    "content": "That's an artistic masterpiece! 😍"
                }
            ],
            "images": ["https://random.imagecdn.app/720/520"]
        },
        {
            "id": "post_7",
            "author": {
                "id": "user_7",
                "firstName": "Olivia",
                "lastName": "Miller",
                "username": "AstroChef",
                "profilePicture": "https://randomuser.me/api/portraits/men/83.jpg",
                "private": false
            },
            "content": "Cooking up celestial recipes. Today's special: Nebula Noodles! 🍜🌌 #SpaceCuisine",
            "createdAt": "2024-01-25T14:00:00.000Z",
            "reactions": [
                {
                    "id": "reaction_8",
                    "user": {
                        "username": "GalacticFoodie",
                        "profilePicture": "https://randomuser.me/api/portraits/women/92.jpg",
                        "private": false
                    },
                    "type": "LOVE"
                }
            ],
            "comments": [
                {
                    "id": "comment_8",
                    "author": {
                        "id": "userK",
                        "firstName": "Mason",
                        "lastName": "Davis",
                        "username": "CosmicCritic",
                        "profilePicture": "https://randomuser.me/api/portraits/women/99.jpg",
                        "private": false
                    },
                    "content": "I'd love to taste those Nebula Noodles!"
                }
            ],
            "images": ["https://random.imagecdn.app/800/600"]
        },
        {
            "id": "post_8",
            "author": {
                "id": "user_8",
                "firstName": "Sophia",
                "lastName": "Clark",
                "username": "InterstellarDJ",
                "profilePicture": "https://randomuser.me/api/portraits/men/47.jpg",
                "private": false
            },
            "content": "Spinning cosmic beats in the heart of the Milky Way. 🎧🌌 #GalacticGroove",
            "createdAt": "2024-01-25T15:30:00.000Z",
            "reactions": [
                {
                    "id": "reaction_9",
                    "user": {
                        "username": "StellarDancer",
                        "profilePicture": "https://randomuser.me/api/portraits/women/56.jpg",
                        "private": false
                    },
                    "type": "LOVE"
                }
            ],
            "comments": [
                {
                    "id": "comment_9",
                    "author": {
                        "id": "userL",
                        "firstName": "Ava",
                        "lastName": "Hill",
                        "username": "NebulaRaver",
                        "profilePicture": "https://randomuser.me/api/portraits/men/64.jpg",
                        "private": false
                    },
                    "content": "I can feel the cosmic vibes from here!"
                }
            ],
            "images": ["https://random.imagecdn.app/720/480"]
        },
        {
            "id": "post_9",
            "author": {
                "id": "user_9",
                "firstName": "Liam",
                "lastName": "Brown",
                "username": "LunarLinguist",
                "profilePicture": "https://randomuser.me/api/portraits/men/72.jpg",
                "private": false
            },
            "content": "Decoding alien messages from the far reaches of the universe. 🛰️👽 #SpaceLanguage",
            "createdAt": "2024-01-25T16:45:00.000Z",
            "reactions": [
                {
                    "id": "reaction_10",
                    "user": {
                        "username": "GalacticLinguist",
                        "profilePicture": "https://randomuser.me/api/portraits/women/80.jpg",
                        "private": false
                    },
                    "type": "LOVE"
                }
            ],
            "comments": [
                {
                    "id": "comment_10",
                    "author": {
                        "id": "userM",
                        "firstName": "Emma",
                        "lastName": "Cooper",
                        "username": "SpaceScribe",
                        "profilePicture": "https://randomuser.me/api/portraits/men/88.jpg",
                        "private": false
                    },
                    "content": "What interesting messages have you decoded so far?"
                }
            ],
            "images": ["https://random.imagecdn.app/700/500"]
        },
        {
            "id": "post_10",
            "author": {
                "id": "user_10",
                "firstName": "Mason",
                "lastName": "Davis",
                "username": "StellarSketcher",
                "profilePicture": "https://randomuser.me/api/portraits/men/90.jpg",
                "private": false
            },
            "content": "Sketching the wonders of the cosmos. ✏️🌠 #SpaceArt",
            "createdAt": "2024-01-25T17:30:00.000Z",
            "reactions": [
                {
                    "id": "reaction_11",
                    "user": {
                        "username": "GalacticPainter",
                        "profilePicture": "https://randomuser.me/api/portraits/women/95.jpg",
                        "private": false
                    },
                    "type": "LOVE"
                }
            ],
            "comments": [
                {
                    "id": "comment_11",
                    "author": {
                        "id": "userN",
                        "firstName": "Ava",
                        "lastName": "Hill",
                        "username": "NebulaArtist",
                        "profilePicture": "https://randomuser.me/api/portraits/men/99.jpg",
                        "private": false
                    },
                    "content": "Your sketches capture the essence of the cosmos beautifully!"
                }
            ],
            "images": ["https://random.imagecdn.app/800/600"]
        }
    ] as Tweet[];
    async getTweets(tab: FeedTabs) {
        return this.data as Tweet[];
    }

    async getTweet(tweetId: string): Promise<Tweet> {
         const tweet = this.data.find(tweet => tweet.id === tweetId);
         console.log('Tweet:', tweet);
         if (tweet) {
             return tweet;
         }
         throw new Error('Tweet not found');
    }

    likeTweet(tweetId: number, isLiking: boolean): Promise<void> {
        return Promise.resolve(undefined);
    }

    retweetTweet(tweetId: number, isRetweeting: boolean): Promise<void> {
        return Promise.resolve(undefined);
    }
}