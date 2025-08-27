PaymI2 is the next generation of PaySpot’s core financial application, created as a full redesign of the earlier PaymI system. While the first version focused heavily on features, PaymI2 was architected with long-term maintainability, scalability, and clean modular design in mind.

### Frontend Architecture

* Built with **Angular**, fully modularized with shared and feature modules.
* Introduced **abstract page types** to cover common behaviors, allowing concrete pages to be defined generically with minimal custom code.
* Features inherit functionality via **model-based roles**, reducing duplication.
* Shared services such as entity and action services provide a consistent interface across the app.
* Heavy use of **RxJS** for reactive patterns, ensuring flexible data handling.
* Supports **lazy loading** and **multi-language localization** out of the box.

### Backend Architecture

* Based on **.NET Core**, with key restructuring to extract specialized logic into **shared libraries**.
* Core app is lighter and reusable, enabling parts of it to be leveraged by other products.

### Business Impact

* Consolidates features from the original PaymI while introducing new capabilities.
* Currently deployed in **Serbia** and **Montenegro**, with rollout to **North Macedonia** underway.
* Serves as a cornerstone product for PaySpot’s financial operations in multiple markets.

### Role

My main focus was **core architecture**, rather than feature development. I designed the frontend structure to ensure features could be added cleanly by a growing team, and worked on backend improvements to improve modularity and reuse.
