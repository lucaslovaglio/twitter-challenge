import React from "react";
import styles from "./withLayout.module.css";
import NavBar from "../../components/nav-bar/nav-bar.component";
import Recommendations from "../../components/recommendations/recommendations.components";

const withLayout = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const HOC: React.FC<P> = (props) => {
        return (
            <div className={styles.wrapper}>
                <div className={`${styles.leftBar}`}>
                    <div className={styles.leftBarContent}>
                        <NavBar />
                    </div>
                </div>
                <div className={styles.feed}>
                    <WrappedComponent {...props} />
                </div>
                <div className={styles.rightBar}>
                    <div className={styles.rightBarContent}>
                        <Recommendations />
                    </div>
                </div>
            </div>
        );
    };

    return HOC;
};

export default withLayout;
