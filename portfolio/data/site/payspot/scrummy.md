*Internal Project • Development Workflow • Customization*

## Streamlining Our Scrum Workflow

**Scrummy** is an internal tool I designed and implemented to significantly improve our team’s Scrum-based development workflow. While my team used IceScrum as our primary project management system, it often didn’t fully align with our specific needs. The solution developed was Scrummy, integrating it with the **IceScrum API** to provide a more customized, streamlined, and efficient experience for our team.

### My Role & Contributions

I was responsible for designing and implementing the **core story acceptance workflow** within Scrummy, along with its tight integration with IceScrum. My primary focus was on creating a clear, automated flow for stories and enabling the intelligent generation and estimation of tasks.

### Key Features Developed

The development of Scrummy focused on features that addressed our team's specific pain points and enhanced productivity:

*   **Customizable Story Acceptance Workflow**
    *   Stories now move through a structured pipeline: *draft → analysis → acceptance decision → accepted → estimated*.
    *   During the **analysis** phase, solution proposals and implementation tasks could be clearly defined.
    *   Crucially, at the **acceptance** stage, approved stories automatically generate their corresponding implementation tasks.
    *   The system was designed to calculate story estimation based on task effort, making our planning processes more reliable.
    *   Flexibility was also built in for stories to be rejected and seamlessly returned to earlier states (e.g., draft or analysis).

*   **Comprehensive Task Management**
    *   An overarching goal was to enable full task handling directly inside Scrummy.
    *   This meant our team members no longer needed to interact with IceScrum’s interface at all for their daily task management.

![Product Stories Page](data/images/scrummy.png "Scrummy's product stories page: interactive filters and story cards.")

### Technology Stack

This project presented an exciting opportunity to explore new technologies. The application was built leveraging:

*   **Frontend**: Angular
*   **Backend**: Node.js, TypeORM with SQLite
*   Tight integration with the **IceScrum API** was central to ensuring seamless data synchronization.
*   The frontend was meticulously designed for **workflow clarity**, aiming to minimize friction in our story and task handling processes.

### Business Impact

The implementation of Scrummy brought tangible benefits to the team:

*   Improved **transparency and control** over the entire story acceptance process was achieved.
*   The tool significantly reduced our reliance on the IceScrum UI, saving valuable time and aligning our process more closely with our actual development practices.
*   Scrummy played a key role in helping our team maintain a **consistent and shared definition of “ready” stories** before they proceeded to estimation.