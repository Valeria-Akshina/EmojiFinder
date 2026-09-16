import React, { type ChangeEvent } from 'react';
import styles from './index.module.css';

interface HeaderProps {
    searchValue: string;
    onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Header: React.FC<HeaderProps> = ({ searchValue, onSearchChange }) => {
    return (
        <header className={styles.hero}>
        <h1 className={styles.title}>Emoji Finder</h1>
        <p className={styles.subtitle}>Find emoji by keywords</p>
        
        <div className={styles.searchContainer}>
            <input
            type="text"
            className={styles.searchInput}
            placeholder="Placeholder"
            value={searchValue}
            onChange={onSearchChange}
            />
        </div>
        </header>
    );
};