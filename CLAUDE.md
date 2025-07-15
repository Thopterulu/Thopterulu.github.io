# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Docusaurus 3.8.1-based static documentation website** deployed on GitHub Pages. The site serves as a personal knowledge base and blog called "Yet another book of knowledge" by Thopterulu, combining technical documentation, blog posts, and a custom bookmark/app launcher feature.

## Development Commands

```bash
# Development
npm start          # Start development server (localhost:3000)
npm run build      # Build for production
npm run serve      # Serve built site locally
npm run clear      # Clear Docusaurus cache

# Deployment
npm run deploy     # Deploy to GitHub Pages (automated via GitHub Actions)

# Content management
npm run write-translations    # Generate translation files
npm run write-heading-ids    # Generate heading IDs
```

**Note**: Deployment is automated via GitHub Actions on pushes to main branch.

## Architecture Overview

### Core Structure
- **Docusaurus 3.8.1** with React 19.1.0 and MDX 3.1.0
- **Content**: `docs/` (technical documentation), `blog/` (blog posts)
- **Components**: `src/components/` (React components)
- **Data**: `src/data/bookmarks.json` (bookmark system data)
- **Styles**: `src/css/custom.css` (global styles)

### Key Components

**AppLauncher** (`src/components/AppLauncher/`):
- Interactive bookmark manager with search and filtering
- Hierarchical category/subcategory system
- Pinned items support
- Dynamic favicon fetching from Google's favicon service
- Main data source: `src/data/bookmarks.json`

**Documentation System**:
- Auto-generated sidebar from folder structure via `sidebars.js`
- Organized by categories using `_category_.json` files
- Subjects: dev-environnement, gaming, learning-languages, etc.

## Content Management

### Documentation (`docs/`)
- Uses `_category_.json` for folder organization and navigation
- Markdown files with frontmatter for metadata
- Auto-generated sidebar navigation

### Blog (`blog/`)
- MDX format with frontmatter
- Author and tag management
- RSS/Atom feed generation

### Bookmarks (`src/data/bookmarks.json`)
Structure:
```json
{
  "categories": {
    "category-name": {
      "name": "Display Name",
      "subcategories": {
        "subcategory-name": {
          "name": "Display Name",
          "items": [
            {
              "name": "Item Name",
              "url": "https://example.com",
              "description": "Description",
              "pinned": true
            }
          ]
        }
      }
    }
  }
}
```

## Configuration Files

- **`docusaurus.config.js`**: Main site configuration, theme settings, GitHub Pages deployment
- **`sidebars.js`**: Auto-generated documentation sidebar
- **`src/data/bookmarks.json`**: Bookmark data structure
- **`.github/workflows/deploy-site.yml`**: Automated deployment workflow

## Development Practices

### GitHub Integration
- Automated deployment via GitHub Actions on main branch pushes
- Continuous deployment to GitHub Pages
- Repository: `Thopterulu.github.io`

### Content Creation Guidelines
- Documentation files should include proper frontmatter
- Use `_category_.json` for organizing documentation sections
- Blog posts use MDX format with author and tag metadata
- Bookmark additions should follow the hierarchical structure in `bookmarks.json`

### Code Style
- React components use functional components with hooks
- CSS modules and clsx for styling
- Prism React Renderer for code syntax highlighting with GitHub/Dracula theme

## Technical Requirements

- **Node.js 18+**
- **npm** for package management
- **Git** for version control
- Deployment handled automatically via GitHub Actions

## Special Features

- **Custom App Launcher**: Sophisticated bookmark management with search, filtering, and categorization
- **Multilingual Content**: Mix of English and French documentation
- **Personal Knowledge Base**: Comprehensive technical documentation across multiple domains
- **Automated Documentation**: Integration supports structured knowledge capture and sharing