import React from 'react';
import { FeedTabs } from '../../enums/feed-tabs.enum';
import styles from './tab-selector.module.css';

interface TabSelectorProps {
    selectedTab: FeedTabs;
    onSelectTab: (tab: FeedTabs) => void;
}

const TabSelector: React.FC<TabSelectorProps> = ({ selectedTab, onSelectTab }) => {
    return (
        <div className={styles.tabContainer}>
            {Object.values(FeedTabs).map(tab => (
                <div
                    key={tab}
                    className={`${styles.tab} ${selectedTab === tab ? styles.active : ''}`}
                    onClick={() => onSelectTab(tab)}
                >
                    {tab}
                </div>
            ))}
        </div>
    );
};

export default TabSelector;
