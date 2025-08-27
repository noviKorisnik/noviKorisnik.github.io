**Scrummy** is an internal tool built to improve our team’s Scrum-based development workflow. While we used IceScrum as the primary project management system, it often didn’t fully match our needs. Scrummy was created to integrate with the **IceScrum API** and provide a more customized, streamlined experience for our team.

### Key Features

* **Story Acceptance Workflow**

  * Stories move through a structured pipeline: *draft → analysis → acceptance decision → accepted → estimated*.
  * During **analysis**, solution proposals and implementation tasks are defined.
  * At **acceptance**, approved stories automatically generate implementation tasks.
  * Story estimation is calculated based on task effort, making planning more reliable.
  * Stories can be rejected and returned to earlier states (e.g., draft or analysis).

* **Task Management**

  * Goal: allow full task handling directly inside Scrummy.
  * Team members don’t need to use IceScrum’s interface at all.

### Technology

* **Node.js** backend – a shift from the .NET ecosystem, marking an exploration of new technologies.
* Tight integration with **IceScrum API** for seamless synchronization.
* Frontend designed for **workflow clarity**, minimizing friction in story and task handling.

### Business Impact

* Improved **transparency and control** over the story acceptance process.
* Reduced reliance on IceScrum UI, saving time and aligning the tool more closely with our actual process.
* Helped the team maintain a **consistent definition of “ready” stories** before estimation.

### Role

I designed and implemented the **core acceptance workflow** and integration with IceScrum. My work focused on creating a clear flow for stories and enabling automation around task generation and estimation.
