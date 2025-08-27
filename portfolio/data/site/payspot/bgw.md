The **Background Worker** is a lightweight application designed to handle scheduled and recurring tasks for PaySpot’s financial systems. It operates as a Windows Service, ensuring continuous background processing without manual intervention.

### Architecture

* Built on **.NET**, deployed as a **Windows Service**.
* Uses the **Quartz scheduler** for managing scheduled and recurrent jobs.
* Relies on the **shared PaySpot libraries**, keeping the application lean while reusing core business logic.

### Features

* **Automated payment workflows** such as delayed sending of payment orders to banks.
* **Status polling** for submitted orders to ensure up-to-date transaction tracking.
* Easily extensible by adding new scheduled tasks through configuration.

### Business Impact

* Improved **operational reliability** by reducing manual interventions.
* Enabled the system to handle **time-sensitive financial operations** consistently and accurately.
* Freed the main application from background responsibilities, keeping it more efficient.

### Role

I designed and implemented the Background Worker application, ensuring it was **lightweight, modular, and fully aligned** with the shared ecosystem of libraries used by PaySpot’s main products.
