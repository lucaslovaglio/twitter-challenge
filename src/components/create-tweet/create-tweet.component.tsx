import React, { useState } from 'react';
import styles from './create-tweet.module.css';
import { ReactComponent as PictureIcon} from "../common/icons/picture-icon.svg";
import Button from "../common/button/button.component";

const CreateTweetComponent: React.FC = () => {
    const [tweetText, setTweetText] = useState('');

    const handleTweetChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTweetText(event.target.value);
    };

    const handleTweetSubmit = () => {
        console.log('Tweet enviado:', tweetText);
        setTweetText('');
    };

    return (
        <div className={styles.createTweet}>
            <div className={styles.topSection}>
                <img
                    src="https://via.placeholder.com/50"
                    alt="User Avatar"
                    className={styles.avatar}
                />
                <textarea
                    value={tweetText}
                    onChange={handleTweetChange}
                    placeholder="What’s happening?"
                    className={styles.textarea}
                />
            </div>
            <div className={styles.actions}>
                <button className={styles.imageButton}>
                    <PictureIcon/>
                </button>
                <Button
                    // className={styles.tweetButton}
                    onClick={handleTweetSubmit}
                    text={'Tweet'}
                    disabled={tweetText.trim() === ''}
                />
            </div>
        </div>
    );
};

export default CreateTweetComponent;
