import React, { useState, useMemo, useCallback } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import bookmarksData from '@site/src/data/bookmarks.json';
import { fuzzyFilter, highlightMatch } from '@site/src/utils/fuzzySearch';
import { useDebounce } from '@site/src/hooks/useDebounce';
import { useLocalStorage } from '@site/src/hooks/useLocalStorage';

function AppShortcut({title, icon, url, description, category, subcategory, searchTerm}) {
  const handleClick = useCallback(() => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, [url]);

  return (
    <div 
      className={styles.appShortcut} 
      onClick={handleClick} 
      role="button" 
      tabIndex={0} 
      title={url}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      <div className={styles.appIcon}>
        {icon ? (
          <img src={icon} alt={`${title} - ${url}`} className={styles.iconImage} title={url} />
        ) : (
          <div className={styles.iconFallback} title={url}>{title.charAt(0)}</div>
        )}
      </div>
      <div className={styles.appInfo}>
        <h3 className={styles.appTitle}>
          {searchTerm ? highlightMatch(title, searchTerm) : title}
        </h3>
        <p className={styles.appDescription}>
          {searchTerm ? highlightMatch(description, searchTerm) : description}
        </p>
        <div className={styles.categoryTags}>
          <span className={styles.appCategory}>{category}</span>
          {subcategory && <span className={styles.appSubcategory}>{subcategory}</span>}
        </div>
      </div>
    </div>
  );
}

function PinnedApps({ pins, bookmarks, searchTerm, selectedCategories, selectedSubcategory, layoutMode }) {
  const filteredPins = useMemo(() => {
    let filtered = pins;
    
    // Apply search filter
    if (searchTerm) {
      filtered = fuzzyFilter(filtered, searchTerm, (pin) => [
        pin.title,
        pin.category,
        pin.subcategory
      ]);
    }
    
    // Apply category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes('All')) {
      filtered = filtered.filter(pin => selectedCategories.includes(pin.category));
    }
    
    // Apply subcategory filter
    if (selectedSubcategory !== 'All') {
      filtered = filtered.filter(pin => pin.subcategory === selectedSubcategory);
    }
    
    return filtered;
  }, [pins, searchTerm, selectedCategories, selectedSubcategory]);

  if (filteredPins.length === 0) return null;

  return (
    <div className={styles.categorySection}>
      <h2 className={styles.categoryTitle}>📌 Pinned Sites</h2>
      <div className={clsx(styles.appsGrid, styles[`layout-${layoutMode}`])}>
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
              searchTerm={searchTerm}
            />
          );
        })}
      </div>
    </div>
  );
}


export default function AppLauncher() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useLocalStorage('appLauncher_selectedCategories', ['All']);
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');
  const [layoutMode, setLayoutMode] = useLocalStorage('appLauncher_layoutMode', 'compact');
  
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const { bookmarks, pins, categories } = bookmarksData;

  const availableSubcategories = useMemo(() => {
    if (selectedCategories.includes('All') || selectedCategories.length === 0) {
      return ['All'];
    }
    const subcategoriesSet = new Set(['All']);
    selectedCategories.forEach(categoryName => {
      const categoryData = categories.find(cat => cat.name === categoryName);
      if (categoryData) {
        categoryData.subcategories.forEach(sub => subcategoriesSet.add(sub));
      }
    });
    return Array.from(subcategoriesSet);
  }, [selectedCategories, categories]);

  const filteredBookmarks = useMemo(() => {
    let filtered = bookmarks;
    
    // Apply search filter with fuzzy matching
    if (debouncedSearchTerm) {
      filtered = fuzzyFilter(filtered, debouncedSearchTerm, (bookmark) => [
        bookmark.title,
        bookmark.description,
        bookmark.subcategory,
        bookmark.category
      ]);
    }
    
    // Apply category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes('All')) {
      filtered = filtered.filter(bookmark => selectedCategories.includes(bookmark.category));
    }
    
    // Apply subcategory filter
    if (selectedSubcategory !== 'All') {
      filtered = filtered.filter(bookmark => bookmark.subcategory === selectedSubcategory);
    }
    
    return filtered;
  }, [bookmarks, debouncedSearchTerm, selectedCategories, selectedSubcategory]);

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

  const handleCategoryChange = (categoryName) => {
    setSelectedCategories(prev => {
      if (categoryName === 'All') {
        return ['All'];
      }
      
      const newCategories = prev.includes(categoryName)
        ? prev.filter(cat => cat !== categoryName)
        : [...prev.filter(cat => cat !== 'All'), categoryName];
      
      return newCategories.length === 0 ? ['All'] : newCategories;
    });
    setSelectedSubcategory('All');
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
            <div className={styles.searchActions}>
              <select
                className={styles.layoutSelect}
                value={layoutMode}
                onChange={(e) => setLayoutMode(e.target.value)}
                title="Layout Mode"
              >
                <option value="grid">Grid</option>
                <option value="list">List</option>
                <option value="compact">Compact</option>
              </select>
            </div>
          </div>

          <div className={styles.filtersContainer}>
            <div className={styles.categoryFilter}>
              <label>Categories:</label>
              <div className={styles.categoryCheckboxes}>
                {categories.map(category => (
                  <label key={category.name} className={styles.categoryCheckbox}>
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category.name)}
                      onChange={() => handleCategoryChange(category.name)}
                    />
                    {category.name}
                  </label>
                ))}
              </div>
            </div>

            {availableSubcategories.length > 1 && (
              <div className={styles.subcategoryFilter}>
                <label>Subcategory:</label>
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
          searchTerm={debouncedSearchTerm}
          selectedCategories={selectedCategories}
          selectedSubcategory={selectedSubcategory}
          layoutMode={layoutMode}
        />

        {Object.entries(groupedBookmarksByCategory).map(([category, subcategoryGroups]) => (
          <div key={category} className={styles.categorySection}>
            <h2 className={styles.categoryTitle}>{category}</h2>
            <div className={clsx(styles.appsGrid, styles[`layout-${layoutMode}`])}>
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
                    searchTerm={debouncedSearchTerm}
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
