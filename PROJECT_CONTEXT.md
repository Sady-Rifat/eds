# Adobe Experience Manager (AEM) Helix Project Context

## Project Overview
This is an **Adobe Experience Manager (AEM) Helix** project based on the official `@adobe/aem-boilerplate` template. AEM Helix is Adobe's modern, headless content management solution that enables fast, performant websites using a block-based architecture.

### Key Characteristics
- **Framework**: Adobe Helix (Edge Delivery Services)
- **Architecture**: Block-based component system
- **Content Source**: Google Drive (configured in `fstab.yaml`)
- **Deployment**: Adobe's Edge Delivery Services
- **Performance**: Optimized for Core Web Vitals and fast loading

## Project Structure

### Core Files
- **`fstab.yaml`**: Defines content mountpoints (Google Drive integration)
- **`head.html`**: Global HTML head content and script loading
- **`package.json`**: Project dependencies and build scripts
- **`404.html`**: Custom 404 error page

### JavaScript Architecture
Located in `/scripts/`:
- **`aem.js`**: Core AEM Helix framework utilities and block system
- **`scripts.js`**: Main application entry point and page lifecycle
- **`delayed.js`**: Delayed loading functionality (currently empty)
- **`placeholders.js`**: Internationalization and placeholder management

### Block System
Located in `/blocks/` - Each block is a self-contained component:
- **`accordion/`**: Collapsible content sections
- **`cards/`**: Card-based content display
- **`carousel/`**: Image/content carousel
- **`columns/`**: Multi-column layouts
- **`embed/`**: External content embedding
- **`footer/`**: Site footer with navigation
- **`form/`**: Form handling and validation
- **`fragment/`**: Reusable content fragments
- **`header/`**: Site header with navigation and breadcrumbs
- **`hero/`**: Hero banner sections
- **`modal/`**: Modal dialog functionality
- **`quote/`**: Quote/testimonial display
- **`search/`**: Search functionality
- **`table/`**: Data table display
- **`tabs/`**: Tabbed content interface
- **`video/`**: Video embedding and playback

### Styling System
Located in `/styles/`:
- **`styles.css`**: Main stylesheet (not examined in detail)
- **`fonts.css`**: Font definitions and loading
- **`lazy-styles.css`**: Styles loaded after initial page load

### Assets
- **`/fonts/`**: Roboto font family (regular, medium, bold, condensed)
- **`/icons/`**: SVG icons (search icon present)
- **`favicon.ico`**: Site favicon

## Technical Architecture

### Page Loading Strategy
The application uses a sophisticated loading strategy:
1. **Eager Loading**: Critical above-the-fold content
2. **Lazy Loading**: Below-the-fold sections and blocks
3. **Delayed Loading**: Non-critical functionality (3-second delay)

### Block Loading System
- Blocks are loaded dynamically with CSS and JavaScript
- Each block has its own CSS and JS files
- Blocks are decorated and initialized automatically
- Status tracking prevents duplicate loading

### Performance Features
- **RUM (Real User Monitoring)**: Built-in performance tracking
- **Optimized Images**: Automatic WebP conversion and responsive sizing
- **Font Loading**: Strategic font loading with session storage caching
- **Code Splitting**: Modular JavaScript loading

### Content Management
- **Google Drive Integration**: Content stored in Google Drive
- **Fragment System**: Reusable content pieces (header/footer navigation)
- **Metadata System**: Page-level configuration via metadata
- **Placeholders**: Internationalization support

## Development Workflow

### Local Development
1. Install dependencies: `npm i`
2. Install AEM CLI: `npm install -g @adobe/aem-cli`
3. Start AEM Proxy: `aem up` (opens http://localhost:3000)
4. Content is served from Google Drive mountpoint

### Code Quality
- **ESLint**: Airbnb base configuration with browser environment
- **Stylelint**: Standard CSS linting
- **Semantic Release**: Automated versioning and releases

### Build Process
- No traditional build step required
- Files are served directly from the repository
- Adobe's Edge Delivery Services handles optimization

## Key Patterns and Conventions

### Block Development
Each block follows this pattern:
```javascript
export default function decorate(block) {
  // Transform block DOM structure
  // Add event listeners
  // Apply styling classes
}
```

### CSS Class Naming
- Block classes: `.block-name`
- Wrapper classes: `.block-name-wrapper`
- Container classes: `.block-name-container`
- Utility classes follow BEM-like conventions

### JavaScript Utilities
The `aem.js` file provides essential utilities:
- `buildBlock()`: Create block DOM structure
- `loadBlock()`: Load block CSS/JS
- `decorateBlock()`: Apply block decorations
- `createOptimizedPicture()`: Generate responsive images
- `getMetadata()`: Access page metadata
- `loadCSS()`/`loadScript()`: Dynamic asset loading

### Content Structure
- Sections contain blocks
- Blocks contain rows and columns
- Content can be authored in Google Drive
- Automatic button decoration for links in paragraphs

## Environment Configuration

### Deployment Environments
- **Preview**: `https://main--{repo}--{owner}.hlx.page/`
- **Live**: `https://main--{repo}--{owner}.hlx.live/`

### Content Source
- Google Drive folder: `1SRywiYjljR23sa0vmtFjVeIZgDfGx8wx`
- Mounted at root path (`/`)

## Accessibility Features
- ARIA labels automatically added to links
- Keyboard navigation support in header
- Focus management for modals and dropdowns
- Semantic HTML structure

## Browser Support
- Modern browsers with ES6+ support
- Mobile-responsive design (900px desktop breakpoint)
- Progressive enhancement approach

## Integration Points
- **Adobe Analytics**: Via RUM system
- **Google Drive**: Content management
- **GitHub**: Code synchronization via AEM Code Sync app
- **Adobe Edge Delivery**: Hosting and optimization

This project represents a modern, performance-focused approach to web development using Adobe's Helix platform, emphasizing fast loading times, excellent Core Web Vitals scores, and a component-based architecture that scales well for enterprise content management needs.