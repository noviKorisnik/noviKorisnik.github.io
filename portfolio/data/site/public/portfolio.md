*Solo Project • Public Deployment • GitHub Pages*

## A Live Demonstration of My Front-End Capabilities

This very website serves as a testament to my approach in building dynamic, responsive, and highly configurable web applications. I developed it using **Angular, TypeScript, and modern SCSS practices**, crafting it as a live demonstration of various front-end challenges effectively met.

### The Concept: A Product-Like Solution

Instead of relying on third-party portfolio platforms, my vision for this app was a **product-like solution**, where I intentionally separated content from core application logic. All site data—including sections, configuration, and social links—is stored in structured JSON and Markdown files. This design choice makes the application lightweight, incredibly flexible, and easy to maintain, allowing me to update content without needing to redeploy code. It also showcases my architectural thinking and dedication to clean, extensible Angular development.

### Key Features & Functionality I Implemented

I designed this site to offer a flexible and rich user experience, adapting to different viewing preferences and content structures:

*   **Responsive Design:** The layout is meticulously optimized for a seamless experience across three distinct breakpoints (wide, medium, narrow screens), ensuring usability on desktops, tablets, and mobile devices.
*   **Dynamic Content Loading:** All textual content, including this very article, is dynamically loaded from Markdown files, parsed, and rendered on-the-fly. This allows for effortless content updates.
*   **Two Primary Layout Modes:** The site offers distinct ways to consume content:
    *   **Sectioned View:** This layout displays content one section at a time, often using interactive cards for navigation, perfect for focused exploration. My implementations include:
        *   **Hierarchical Card Navigation:** Clickable cards guide users deeper into content hierarchies.
        *   **Sequential Navigation:** "Previous" and "Next" buttons at the footer allow for easy linear progression through all available sections.
    *   **Single-Page View:** This mode presents all content as a continuous, scrollable experience, ideal for quick overviews. Here, I implemented:
        *   **Scroll-to-URL Synchronization:** The browser's URL dynamically updates to reflect the section currently visible at the top of the viewport as you scroll.
        *   **Deep Linking:** Direct navigation to specific sections via URL (e.g., `yourdomain.com/projects/your-project`) is fully supported and restores scroll position accurately, even on page refresh.
*   **Highly Configurable User Interface:** I integrated a preference modal, allowing users to personalize their experience by choosing:
    *   **Layouts:** Interactively switch page layout.
    *   **Color Palettes:** Instantly switch between 'Light' and 'Dark' themes.
    *   **Typography Styles:** Select from 'Clean', 'Classic', or 'Monospace' fonts to suit personal aesthetic or content type.
*   **Robust Navigation System:**
    *   **Collapsible Sidebar:** A dynamic, multi-level navigation sidebar provides an overview of the site structure, with active states indicating the current section. It automatically expands parents of sub-sections and collapses on narrow screens for better space utilization.
    *   **Contextual Breadcrumbs:** In "Sectioned View," a dynamic breadcrumb trail helps users understand their current location within the site's hierarchy, with clickable links for easy backtracking.
    *   **Global Link Handling:** All external links within Markdown content automatically open in new browser tabs for improved user retention and experience.
*   **Image Support:** I included robust support for inline Markdown images with lightbox behavior for better presentation.

This project is a direct demonstration of my ability to not only build visually appealing and highly interactive interfaces but also to implement robust, maintainable, and adaptable front-end solutions, tackling complex requirements and debugging intricate interactions. It serves as a meta-example of my development approach—structured, reusable, and focused on exceptional user experience.

---

**Live Demonstration At:** 🔗 [This Portfolio](https://novikorisnik.github.io/portfolio/)

---