import { Card } from '../Card/Card';
import styles from './index.module.css';

const cardEmoji = [
    {
        symbol: '💯',
        title: '100',
        keywords: 'Hundred, points, symbol, wow, win, perfect, parties',
    },
    {
        symbol: '🔢',
        title: '1234',
        keywords: 'input symbol for numbers symbol',
    },
];

export const CardList = () => {
    return (
        <main className={styles.container}>
        <div className={styles.grid}>
            {cardEmoji.map((item, index) => (
            <Card
                key={index}
                symbol={item.symbol}
                title={item.title}
                keywords={item.keywords}
            />
            ))}
        </div>
        </main>
    );
};