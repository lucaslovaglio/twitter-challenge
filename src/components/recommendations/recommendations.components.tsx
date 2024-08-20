import React, {useEffect, useState} from 'react';
import styles from './recommendations.module.css';
import Texts from './constants/texts.constant';
import {User} from "../../interfaces/user.interface";
import {RecommendationsService} from "../../services/recommendations/recommendations.service";
import {RecommendationsServiceMock} from "../../services/recommendations/recommendations.service.mock";
import RecommendedUser from "./recommended-user/recommended-user.component";
import Button from "../common/button/button.component";

const Recommendations: React.FC = () => {
    const [recommendedUsers, setRecommendedUsers] = React.useState<User[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const recommendationsService: RecommendationsService = new RecommendationsServiceMock();

    useEffect(() => {
        fetchRecommendedUsers();
    }, []);

    const fetchRecommendedUsers = async () => {
        await recommendationsService.getRecommendedUsers()
            .then((users: User[]) => {
                setRecommendedUsers(users);
            })
            .catch((error: any) => {
                console.error(error);
            });
    }

    const handleAction = async (user: User) => {
        await recommendationsService.addRecommendedUser(user)
    }

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.inputBar}>
                <input
                    type="text"
                    placeholder={Texts.INPUT}
                    value={searchQuery}
                    onChange={handleSearch}
                    className={styles.searchInput}
                />
            </div>
            <div className={styles.container}>
                <div className={styles.header}>
                    {Texts.TITLE}
                </div>
                <div className={styles.content}>
                    {recommendedUsers.map((user: User) => (
                        <div key={user.id}>
                            <RecommendedUser user={user} onClick={()=>handleAction(user)}/>
                        </div>
                    ))}
                </div>
                <div className={styles.actions}>
                    <Button text={Texts.SHOW_MORE} onClick={()=>{}} className={styles.actions}/>
                </div>
            </div>
        </div>
    );
}

export default Recommendations;