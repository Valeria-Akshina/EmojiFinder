import React from 'react';
import type { EmojiItem } from '../../types/emoji';
import styles from './index.module.css';

interface CardListProps {
    emojis: EmojiItem[];
    isLoading: boolean;
    error: string | null;
    favorites: string[];
    onToggleFavorite: (title: string) => void;
}

export const CardList: React.FC<CardListProps> = ({
    emojis,
    isLoading,
    error,
    favorites,
    onToggleFavorite,
    }) => {
    if (isLoading) {
        return <div className={styles.container}>Загрузка...</div>;
    }

    if (error) {
        return <div className={styles.container}>Ошибка: {error}</div>;
    }

    if (emojis.length === 0) {
        return <div className={styles.container}>Ничего не найдено</div>;
    }

    return (
        <main className={styles.container}>
        <div className={styles.grid}>
            {emojis.map((item, index) => {
            const isFav = favorites.includes(item.title);
            return (
                <div
                key={`${item.title}-${index}`}
                className={styles.card}
                onClick={() => onToggleFavorite(item.title)}
                style={{ cursor: 'pointer', position: 'relative' }}
                >
                <span
                    style={{
                    position: 'absolute',
                    top: '10px',
                    right: '12px',
                    fontSize: '1.2rem',
                    color: isFav ? '#ffb400' : '#ccc',
                    }}
                >
                    {isFav ? '★' : '☆'}
                </span>
                <span className={styles.icon}>{(item as any).emoji || item.symbol}</span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.keywords}>{item.keywords}</p>
                </div>
            );
            })}
        </div>
        </main>
    );
};