import React from "react";
import styles from "./home.module.css";
import FeedComponent from "../../components/feed/feed.component";
import NavBar from "../../components/nav-bar/nav-bar.component";
import Recommendations from "../../components/recommendations/recommendations.components";
import withLayout from "../../hoc/withLayout/withLayout.hoc";

const HomePage: React.FC = () => {
    return (
        <FeedComponent />
    );
}

export default withLayout(HomePage);
