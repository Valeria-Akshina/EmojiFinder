import styles from './index.module.css';

export const Header = () => {
    return (
        <header className={styles.hero}>
        <div>
            <h1 className={styles.title}>Emoji Finder</h1>
            <p className={styles.subtitle}>Find emoji by keywords</p>
        </div>

        <div className={styles.searchContainer}>
            <input
            type="text"
            className={styles.searchInput}
            placeholder="Placeholder"
            />
        </div>
        </header>
    );
};