// Analytics utilities for tracking bookmark usage
export class BookmarkAnalytics {
  constructor() {
    this.storageKey = 'appLauncher_analytics';
  }

  getAnalytics() {
    // Check if we're in a browser environment
    if (typeof window === 'undefined' || !window.localStorage) {
      return {
        clicks: {},
        searches: [],
        lastClicked: {},
        totalClicks: 0,
        totalSearches: 0
      };
    }
    
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : {
        clicks: {},
        searches: [],
        lastClicked: {},
        totalClicks: 0,
        totalSearches: 0
      };
    } catch (error) {
      console.error('Error reading analytics:', error);
      return {
        clicks: {},
        searches: [],
        lastClicked: {},
        totalClicks: 0,
        totalSearches: 0
      };
    }
  }

  saveAnalytics(analytics) {
    // Check if we're in a browser environment
    if (typeof window === 'undefined' || !window.localStorage) {
      return;
    }
    
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(analytics));
    } catch (error) {
      console.error('Error saving analytics:', error);
    }
  }

  trackClick(bookmarkId, bookmarkTitle, category) {
    const analytics = this.getAnalytics();
    
    // Increment click count
    analytics.clicks[bookmarkId] = (analytics.clicks[bookmarkId] || 0) + 1;
    analytics.totalClicks++;
    
    // Update last clicked timestamp
    analytics.lastClicked[bookmarkId] = Date.now();
    
    // Keep recent activity (last 100 clicks)
    if (!analytics.recentActivity) {
      analytics.recentActivity = [];
    }
    
    analytics.recentActivity.unshift({
      id: bookmarkId,
      title: bookmarkTitle,
      category,
      timestamp: Date.now()
    });
    
    // Keep only last 100 activities
    analytics.recentActivity = analytics.recentActivity.slice(0, 100);
    
    this.saveAnalytics(analytics);
  }

  trackSearch(searchTerm, resultsCount) {
    const analytics = this.getAnalytics();
    
    analytics.totalSearches++;
    analytics.searches.unshift({
      term: searchTerm,
      resultsCount,
      timestamp: Date.now()
    });
    
    // Keep only last 100 searches
    analytics.searches = analytics.searches.slice(0, 100);
    
    this.saveAnalytics(analytics);
  }

  getMostClicked(limit = 10) {
    const analytics = this.getAnalytics();
    return Object.entries(analytics.clicks)
      .sort(([, a], [, b]) => b - a)
      .slice(0, limit)
      .map(([id, count]) => ({ id, count }));
  }

  getRecentActivity(limit = 10) {
    const analytics = this.getAnalytics();
    return (analytics.recentActivity || []).slice(0, limit);
  }

  getSearchHistory(limit = 10) {
    const analytics = this.getAnalytics();
    return analytics.searches.slice(0, limit);
  }

  getClickCount(bookmarkId) {
    const analytics = this.getAnalytics();
    return analytics.clicks[bookmarkId] || 0;
  }

  getLastClicked(bookmarkId) {
    const analytics = this.getAnalytics();
    return analytics.lastClicked[bookmarkId] || null;
  }

  clearAnalytics() {
    // Check if we're in a browser environment
    if (typeof window === 'undefined' || !window.localStorage) {
      return;
    }
    
    localStorage.removeItem(this.storageKey);
  }
}

export const analytics = new BookmarkAnalytics();