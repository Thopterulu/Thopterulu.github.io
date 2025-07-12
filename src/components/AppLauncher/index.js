import React, { useState, useMemo } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import bookmarksData from '@site/src/data/bookmarks.json';

function AppShortcut({title, icon, url, description, category}) {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.appShortcut} onClick={handleClick} role="button" tabIndex={0} onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        handleClick();
      }
    }}>
      <div className={styles.appIcon}>
        {icon ? (
          <img src={icon} alt={`${title} icon`} className={styles.iconImage} />
        ) : (
          <div className={styles.iconFallback}>{title.charAt(0)}</div>
        )}
      </div>
      <div className={styles.appInfo}>
        <h3 className={styles.appTitle}>{title}</h3>
        <p className={styles.appDescription}>{description}</p>
        <span className={styles.appCategory}>{category}</span>
      </div>
    </div>
  );
}

function PinnedApps({ pins, searchTerm, selectedCategory }) {
  const filteredPins = useMemo(() => {
    return pins.filter(pin => {
      const matchesSearch = searchTerm === '' ||
        pin.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' ||
        pin.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [pins, searchTerm, selectedCategory]);

  if (filteredPins.length === 0) return null;

  return (
    <div className={styles.categorySection}>
      <h2 className={styles.categoryTitle}>📌 Pinned Sites</h2>
      <div className={styles.appsGrid}>
        {filteredPins.map((pin) => (
          <AppShortcut
            key={pin.id}
            title={pin.title}
            url={pin.url}
            description={`Essential site - Position ${pin.position + 1}`}
            category={pin.category}
            icon={`https://www.google.com/s2/favicons?domain=${new URL(pin.url).hostname}&sz=32`}
          />
        ))}
      </div>
    </div>
  );
}

export default function AppLauncher() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const { bookmarks, pins, categories } = bookmarksData;

  const filteredBookmarks = useMemo(() => {
    return bookmarks.filter(bookmark => {
      const matchesSearch = searchTerm === '' ||
        bookmark.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bookmark.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' ||
        bookmark.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [bookmarks, searchTerm, selectedCategory]);

  const groupedBookmarks = useMemo(() => {
    return filteredBookmarks.reduce((groups, bookmark) => {
      const category = bookmark.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(bookmark);
      return groups;
    }, {});
  }, [filteredBookmarks]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <section className={styles.appLauncher}>
      <div className="container">
        <div className={styles.searchContainer}>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search bookmarks..."
              className={styles.searchInput}
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <div className={styles.categoryFilter}>
            <select
              className={styles.categorySelect}
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <PinnedApps
          pins={pins}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
        />

        {Object.entries(groupedBookmarks).map(([category, bookmarks]) => (
          <div key={category} className={styles.categorySection}>
            <h2 className={styles.categoryTitle}>{category}</h2>
            <div className={styles.appsGrid}>
              {bookmarks.map((bookmark) => (
                <AppShortcut
                  key={bookmark.id}
                  title={bookmark.title}
                  icon={bookmark.icon}
                  url={bookmark.url}
                  description={bookmark.description}
                  category={bookmark.category}
                />
              ))}
            </div>
          </div>
        ))}

        {filteredBookmarks.length === 0 && (
          <div className={styles.noResults}>
            <h3>No bookmarks found</h3>
            <p>Try adjusting your search term or category filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
