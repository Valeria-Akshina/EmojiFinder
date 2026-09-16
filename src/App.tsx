import React, { useState, useEffect, type ChangeEvent } from 'react';
import { Header } from './components/Header/Header';
import { CardList } from './components/CardList/CardList';
import { getEmojis } from './api/emojiService'; 
import type { EmojiItem } from './types/emoji';

export const App: React.FC = () => {
  const [emojis, setEmojis] = useState<EmojiItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getEmojis(searchTerm);
        setEmojis(data);
      } catch (err) {
        setError('Не удалось загрузить данные. Проверьте, запущен ли сервер.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleFavorite = (title: string) => {
    setFavorites((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <div>
      <Header searchValue={searchTerm} onSearchChange={handleSearchChange} />
      <CardList
        emojis={emojis}
        isLoading={loading}
        error={error}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default App;