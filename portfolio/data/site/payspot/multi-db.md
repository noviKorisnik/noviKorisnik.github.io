*Internal Project • Data Synchronization • Configuration Management*

## Ensuring Data Consistency Across Environments

**MultiDb** is a specialized internal tool I designed and developed from the ground up to synchronize data across multiple databases used in diverse environments and markets. While these databases inherently shared the same structure, I recognized a consistent challenge in maintaining uniform updates to configurations and access models. MultiDb was my solution, providing a streamlined and robust way to enforce that consistency.

### My Role & Contributions

I was responsible for designing and developing MultiDb entirely from scratch. My primary focus was on creating a **flexible synchronization engine** paired with an **intuitive user interface** to significantly simplify complex multi-environment operations.

### Core Architecture & Technology

MultiDb was built on the **.NET framework**, leveraging our existing shared library ecosystem within PaySpot. Its architecture includes:

*   A dedicated **UI with a query builder**, allowing users to easily define specific synchronization rules.
*   Automated generation of **insert queries** to propagate missing data efficiently from a designated source database to multiple selected targets.

![Database Configuration Editor](data/images/multi-db.png "MultiDb's database configuration editor for defining sync rules.")

### Synchronization Models I Implemented

To tackle the specific consistency challenges, I implemented two core synchronization models:

1.  **Config Model**
    *   This model ensures that shared configuration data (covering applications, environments, localizations, servers, app instances, services, and custom configurations) remains perfectly aligned across all registered databases.
    *   Edits made directly within MultiDb automatically update all relevant databases.

2.  **Access Model**
    *   This component manages our comprehensive application access control model.
    *   It recognizes **features (controllers)**, **actions (keys)**, and **roles** (defined as combinations of actions).
    *   User groups are linked to roles, clearly defining user permissions across different environments.
    *   A key feature I built into the query builder is the ability to copy roles, groups, and permissions between environments with a single click, drastically simplifying access management.

### Business Impact

The successful implementation of MultiDb delivered significant advantages:

*   It drastically reduced **manual synchronization effort**, virtually eliminating errors caused by inconsistent configurations.
*   The tool established a **single point of truth** for both configuration and access control models, enhancing data integrity.
*   MultiDb considerably improved the **onboarding and rollout speed** when deploying applications to new markets, streamlining a previously cumbersome process.