import React from 'react';
import styles from './tweet-image.module.css';

interface TweetImageProps {
    src: string;
}

const TweetImage: React.FC<TweetImageProps> = ({ src }) => {
    return (
        <div className={styles.container}>
            <img src={src} alt="tweet" className={styles.image}/>
        </div>
    );
}

export default TweetImage;