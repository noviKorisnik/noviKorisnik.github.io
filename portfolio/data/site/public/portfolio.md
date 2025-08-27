This very website is a testament to my capabilities in building dynamic, responsive, and highly configurable web applications. Developed with Angular, TypeScript, and modern CSS practices, it serves as a live demonstration of various front-end challenges effectively met.

### Key Features & Functionality

The site is designed to offer a flexible and rich user experience, adapting to different viewing preferences and content structures:

*   **Responsive Design:** Optimized for a seamless experience across three distinct breakpoints (wide, medium, narrow screens), ensuring usability on desktops, tablets, and mobile devices.
*   **Dynamic Content Loading:** All textual content is dynamically loaded from Markdown files, parsed and rendered on-the-fly, allowing for easy content updates without redeploying code.
*   **Two Primary Layout Modes:**
    *   **Single Page View:** Presents all content as a continuous, scrollable experience, ideal for quick overviews. Features include:
        *   **Scroll-to-URL Synchronization:** The browser's URL dynamically updates to reflect the section currently visible at the top of the viewport.
        *   **Deep Linking:** Direct navigation to specific sections via URL (e.g., `yourdomain.com/projects/my-project`) is fully supported, even on page refresh.
    *   **Sectioned View:** Displays content one section at a time, often using interactive cards for navigation, perfect for focused exploration. Features include:
        *   **Hierarchical Card Navigation:** Clickable cards lead users deeper into content hierarchies.
        *   **Sequential Navigation:** "Previous" and "Next" buttons at the footer allow for easy linear progression through all available sections.
*   **Highly Configurable User Interface:** Users can personalize their experience through a preference modal, offering:
    *   **Color Palettes:** Switch between 'Light' and 'Dark' themes.
    *   **Typography Styles:** Choose from 'Clean', 'Classic', or 'Monospace' fonts to suit personal aesthetic or content type.
*   **Robust Navigation System:**
    *   **Collapsible Sidebar:** A dynamic, multi-level navigation sidebar provides an overview of the site structure, with active states indicating the current section. It automatically collapses on narrow screens for better space utilization.
    *   **Contextual Breadcrumbs:** In "Sectioned View," a dynamic breadcrumb trail helps users understand their current location within the site's hierarchy, with clickable links for easy backtracking.
    *   **Global Link Handling:** All external links within Markdown content automatically open in new browser tabs for improved user retention and experience.

### Technical Highlights & Problem Solving

Developing this site involved tackling several interesting technical challenges:

*   **Complex UI State Management:** Ensuring that the sidebar's collapsed state, active links, and expanded sections are synchronized across different interactions and screen sizes.
*   **Dynamic DOM Interaction:** Implementing directives (`MarkdownExternalLinksDirective`) to dynamically modify content rendered by third-party libraries (`ngx-markdown`) to enforce UX rules like opening external links in new tabs.
*   **Precise Scrolling & Routing:** Orchestrating `window.scrollTo`, `router.navigate`, and `getBoundingClientRect` to achieve accurate scroll positions that account for sticky headers and dynamically rendered content, even on page refreshes or layout changes.
*   **Reactive Data Flow:** Efficiently combining multiple observable streams (like route changes and configuration updates) to ensure components react correctly to various application states.
*   **Tree Traversal & Data Flattening:** Developing methods to flatten hierarchical content structures and augment `SectionItem` data with full paths for easier navigation and lookup.

This project demonstrates my ability to not only build visually appealing interfaces but also to implement robust, maintainable, and highly interactive front-end solutions, adapting to evolving requirements and debugging complex interactions.

---

The **Portfolio App** is a personal project built with **Angular**, designed to present professional experience and projects in a clean and structured way.  

### Concept
Instead of relying on third-party portfolio platforms, the app was developed as a **product-like solution**, separating content from logic. All site data is stored in structured JSON and Markdown files, making the app lightweight, flexible, and easy to maintain.  

### Features
- **Configurable structure** – Sections and content are defined through JSON (`index.json`, `config.json`, `social.json`) and corresponding Markdown files.  
- **Layout options** – Supports a **single-page scroll layout** and a **sectioned layout** with sidebar navigation.  
- **Typography & Palette Themes** – Multiple style variants for typography and color palettes, with a user preference modal to personalize appearance.  
- **Content separation** – Markdown for content, with strict file and folder naming conventions for consistency.  
- **Responsive design** – Sidebar adapts across screen sizes (expanded, collapsed, or horizontal).  
- **Image support** – Inline Markdown images with lightbox behavior for better presentation.  

### Use Cases
- Presenting professional experience and personal projects  
- Serving as a demonstration of architectural thinking and frontend design  
- Public GitHub example of a **clean, extensible Angular application**  

This portfolio itself is also **part of the portfolio** – a meta-example of the developer’s approach to building structured, reusable applications.
