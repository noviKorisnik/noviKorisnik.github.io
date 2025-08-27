The **.NET Library Ecosystem** serves as the backbone of PaySpot applications, providing a unified set of reusable modules that ensure consistency, maintainability, and scalability across the platform.  

### Key Components

- **Database Access**  
  A lightweight custom access layer, designed to work efficiently with multiple database backends.  

- **Login & Permissions**  
  A centralized authentication and authorization system that manages user access and fine-grained application permissions.  

- **Financial Services**  
  A modular, *star-like* system that defines a **common interface** for communication with banks.  
  Each bank has its own adapter library, translating between its specific API and the shared interface.  

- **Communication Modules**  
  - **Mailer** for email delivery  
  - **SMS** for text-based notifications  
  - **POS** for point-of-sale integration  
  - **Reports & Documents** for output generation and distribution  

- **Specialized Integrations**  
  - **NBS** (National Bank of Serbia)  
  - **Ria** and **Korona** money transfer systems  

### Impact
This ecosystem reduces code duplication and simplifies integration of new services. By extracting specialized behaviors into libraries, applications like **PaymI2** remain lightweight, while also gaining the flexibility to reuse modules in future products.
