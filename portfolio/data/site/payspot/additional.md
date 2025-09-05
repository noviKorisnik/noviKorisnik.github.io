*Internal Projects • Foundational Systems • Legacy Evolution*

Beyond core application development, my work at PaySpot involved shaping foundational systems and guiding the evolution of our key financial platforms. These projects were instrumental in building a robust and maintainable ecosystem.

### Background Worker: Automated Task Handling

I designed and implemented the **Background Worker**, a lightweight application crucial for handling scheduled and recurring tasks within PaySpot’s financial systems. Operating as a Windows Service, it ensured continuous background processing without manual intervention.

*   **My Role**: My focus was on creating a **lightweight, modular, and fully aligned** application within PaySpot’s shared library ecosystem.
*   **Key Features**: It enabled automated payment workflows (e.g., delayed sending of payment orders to banks) and implemented status polling for submitted orders, ensuring accurate transaction tracking. Its design allows for easy extensibility by adding new scheduled tasks through configuration.
*   **Technology**: Built on **.NET** and leveraging the **Quartz scheduler**, it deployed as a **Windows Service**.
*   **Impact**: This improved **operational reliability**, allowed the system to handle **time-sensitive financial operations** consistently, and freed the main application from background responsibilities.

### .NET Library Ecosystem: The Platform Backbone

I contributed significantly to the **.NET Library Ecosystem**, which serves as the backbone of PaySpot applications. This unified set of reusable modules ensured consistency, maintainability, and scalability across our entire platform.

*   **Key Components**: The ecosystem includes:
    *   **Database Access**: A lightweight custom access layer designed for efficiency across multiple database backends.
    *   **Login & Permissions**: A centralized authentication and authorization system.
    *   **Financial Services**: A modular, *star-like* system defining a common interface for communication with various banks, with individual adapter libraries for each bank.
    *   **Communication Modules**: Specialized modules for email (Mailer), SMS, POS integration, and reports/document generation.
    *   **Specialized Integrations**: Components for specific external systems like NBS (National Bank of Serbia), Ria, and Korona money transfer.
*   **Impact**: This ecosystem drastically reduced code duplication and simplified the integration of new services. By extracting specialized behaviors into these libraries, applications like PaymI2 remain lightweight while gaining the flexibility to reuse modules in future products.

### PaymI: Original Financial Foundation

**PaymI** was PaySpot’s first major financial application, and I played a role in its foundational development. It established the base for handling payment operations and related services across the company.

*   **My Role**: I worked on both **core application development** and **new feature implementation**. My responsibilities also included maintaining architectural consistency and ensuring the system evolved reliably over time.
*   **Architecture & Features**: Built on **.NET Framework**, it featured a custom database access layer (due to lack of DB2 support in Entity Framework at the time) and an in-house core design for reliability. It supported a wide range of financial transaction workflows and continually expanded through feature-driven development.
*   **Impact**: PaymI served as PaySpot’s primary operational system for financial services for many years and is still in production today, though it is gradually being replaced by PaymI2 as features are migrated.