import styles from './index.module.css';

export const Card = ({
    symbol,
    title,
    keywords,
    }: {
    symbol: string;
    title: string;
    keywords: string;
    }) => {
    return (
        <article className={styles.card}>
        <span className={styles.icon}>{symbol}</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.keywords}>{keywords}</p>
        </article>
    );
};