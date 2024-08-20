import React from "react";
import styles from "./home.module.css";
import FeedComponent from "../../components/feed/feed.component";
import NavBar from "../../components/nav-bar/nav-bar.component";
import Recommendations from "../../components/recommendations/recommendations.components";

const HomePage: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.leftBar}`}>
                <div className={styles.leftBarContent}>
                    <NavBar/>
                </div>
            </div>
            <div className={styles.feed}>
                <FeedComponent />
            </div>
            <div className={styles.rightBar}>
                <div className={styles.rightBarContent}>
                    <Recommendations />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
