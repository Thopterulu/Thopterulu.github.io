import React, { useState, useMemo } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import bookmarksData from '@site/src/data/bookmarks.json';

function AppShortcut({title, icon, url, description, category, subcategory}) {
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
        <div className={styles.categoryTags}>
          <span className={styles.appCategory}>{category}</span>
          {subcategory && <span className={styles.appSubcategory}>{subcategory}</span>}
        </div>
      </div>
    </div>
  );
}

function PinnedApps({ pins, bookmarks, searchTerm, selectedCategory, selectedSubcategory }) {
  const filteredPins = useMemo(() => {
    return pins.filter(pin => {
      const matchesSearch = searchTerm === '' ||
        pin.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' ||
        pin.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === 'All' ||
        pin.subcategory === selectedSubcategory;
      return matchesSearch && matchesCategory && matchesSubcategory;
    });
  }, [pins, searchTerm, selectedCategory, selectedSubcategory]);

  if (filteredPins.length === 0) return null;

  return (
    <div className={styles.categorySection}>
      <h2 className={styles.categoryTitle}>📌 Pinned Sites</h2>
      <div className={styles.appsGrid}>
        {filteredPins.map((pin) => {
          // Find matching bookmark for description
          const matchingBookmark = bookmarks.find(bookmark =>
            bookmark.url === pin.url || bookmark.title === pin.title
          );

          return (
            <AppShortcut
              key={pin.id}
              title={pin.title}
              url={pin.url}
              description={matchingBookmark?.description || 'Essential bookmarked site'}
              category={pin.category}
              subcategory={pin.subcategory}
              icon={`https://www.google.com/s2/favicons?domain=${new URL(pin.url).hostname}&sz=32`}
            />
          );
        })}
      </div>
    </div>
  );
}


export default function AppLauncher() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');

  const { bookmarks, pins, categories } = bookmarksData;

  const availableSubcategories = useMemo(() => {
    if (selectedCategory === 'All') {
      return ['All'];
    }
    const categoryData = categories.find(cat => cat.name === selectedCategory);
    return categoryData ? ['All', ...categoryData.subcategories] : ['All'];
  }, [selectedCategory, categories]);

  const filteredBookmarks = useMemo(() => {
    return bookmarks.filter(bookmark => {
      const matchesSearch = searchTerm === '' ||
        bookmark.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bookmark.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bookmark.subcategory.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' ||
        bookmark.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === 'All' ||
        bookmark.subcategory === selectedSubcategory;
      return matchesSearch && matchesCategory && matchesSubcategory;
    });
  }, [bookmarks, searchTerm, selectedCategory, selectedSubcategory]);

  const groupedBookmarksByCategory = useMemo(() => {
    return filteredBookmarks.reduce((groups, bookmark) => {
      const category = bookmark.category;
      if (!groups[category]) {
        groups[category] = {};
      }
      const subcategory = bookmark.subcategory;
      if (!groups[category][subcategory]) {
        groups[category][subcategory] = [];
      }
      groups[category][subcategory].push(bookmark);
      return groups;
    }, {});
  }, [filteredBookmarks]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubcategory('All'); // Reset subcategory when category changes
  };

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
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

          <div className={styles.filtersContainer}>
            <div className={styles.categoryFilter}>
              <select
                className={styles.categorySelect}
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                {categories.map(category => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {availableSubcategories.length > 1 && (
              <div className={styles.subcategoryFilter}>
                <select
                  className={styles.subcategorySelect}
                  value={selectedSubcategory}
                  onChange={handleSubcategoryChange}
                >
                  {availableSubcategories.map(subcategory => (
                    <option key={subcategory} value={subcategory}>
                      {subcategory}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        <PinnedApps
          pins={pins}
          bookmarks={bookmarks}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          selectedSubcategory={selectedSubcategory}
        />

        {Object.entries(groupedBookmarksByCategory).map(([category, subcategoryGroups]) => (
          <div key={category} className={styles.categorySection}>
            <h2 className={styles.categoryTitle}>{category}</h2>
            <div className={styles.appsGrid}>
              {Object.entries(subcategoryGroups).map(([subcategory, bookmarks]) =>
                bookmarks.map((bookmark) => (
                  <AppShortcut
                    key={bookmark.id}
                    title={bookmark.title}
                    icon={bookmark.icon}
                    url={bookmark.url}
                    description={bookmark.description}
                    category={bookmark.category}
                    subcategory={bookmark.subcategory}
                  />
                ))
              ).flat()}
            </div>
          </div>
        ))}

        {filteredBookmarks.length === 0 && (
          <div className={styles.noResults}>
            <h3>No bookmarks found</h3>
            <p>Try adjusting your search term or category filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}
