**MultiDb** is a specialized tool designed to synchronize data across multiple databases used in different environments and markets. While the databases share the same structure, they often require consistent updates to configurations and access models. MultiDb provides a streamlined way to maintain that consistency.

### Architecture

* Built on **.NET**, leveraging the same shared library ecosystem as other PaySpot applications.
* Includes a **UI with a query builder** for defining synchronization rules.
* Generates **insert queries automatically** to propagate missing data from a source database to selected targets.

### Synchronization Models

1. **Config Model**

   * Ensures shared configuration data (applications, environments, localizations, servers, app instances, services, custom configurations) stays aligned across all registered databases.
   * Edits made in MultiDb automatically update all relevant databases.

2. **Access Model**

   * Manages the application access control model.
   * Recognizes **features (controllers)**, **actions (keys)**, and **roles** as combinations of actions.
   * Groups link users to roles, defining what users can do across environments.
   * The query builder makes it possible to copy roles, groups, and permissions between environments with a single click.

### Business Impact

* Reduced **manual synchronization effort** and eliminated errors caused by inconsistent configurations.
* Provided a **single point of truth** for both configuration and access control models.
* Improved **onboarding and rollout speed** when deploying applications to new markets.

### Role

I designed and developed MultiDb from the ground up, focusing on creating a **flexible synchronization engine** and an **intuitive UI** to simplify complex multi-environment operations.
