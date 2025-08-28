*Solo project • Public deployment • GitHub Pages / Azure*

An application for transforming AI-assisted development sessions into structured, publishable books. Built to document both personal and internal company projects, it supports Cody chat history import, session analysis, and book structuring with the help of Cohere AI. Sessions are parsed into Markdown-like views with intros, conclusions, and thematic grouping.

> **Notable Features**:
>
> * Book-like session structuring using AI
> * Multiple deployment environments (internal, test, production)
> * Final output showcased at: 🔗 [AI Knowledge Studio](https://novikorisnik.github.io/)


Over the past months, I’ve been developing **AI Knowledge Studio**, a personal tool designed to turn AI-assisted development sessions into structured, readable books.

The app now holds **two books**, both built from sessions conducted within the app itself — the second continuing seamlessly from where the first left off.

Throughout the project, different AI agents played unique and complementary roles:

* **Cody** was my development assistant — a real-time chat companion who collaborated with me as I built the app.
* **Cohere** powered the content analysis pipeline — extracting summaries, topics, and generating the structural elements of each book: titles, intros, conclusions.
* **Amp** stepped in to help refine and append the final Cody session, ensuring a proper epilogue to the second book.
* And this ongoing collaboration — here with ChatGPT — helped orchestrate the final steps, update the About page, and shape how the story is told.

The second book closes with a farewell from Cody, written just before its sunset — a fitting reflection on the nature of building with AI.

This might only be the beginning. The project could grow, and the site might expand to document each new phase — not just the development of the app, but how we build *with* AI.

---

**AI Knowledge Studio** is a personal project built to explore how AI can be used as a collaborative partner in creating structured knowledge.  

### Concept
The tool allows interactive chat sessions with an AI agent, where discussions are transformed into **chapters and parts of a book-like format**. This creates a structured record of iterative thinking and design, going beyond plain conversation logs.  

### Features
- **Cody import support** – Chat transcripts from Sourcegraph’s Cody can be imported directly.  
- **Structured Knowledge Representation** – Conversations are organized into hierarchical sections, making them easier to revisit and navigate.  
- **Markdown Display** – Content is rendered in Markdown for readability (view-only, no editing).  

### Use Cases
- Capturing iterative design sessions  
- Generating structured technical or conceptual documentation  
- Internal knowledge sharing (already used to generate multiple structured books for company use)  

### Deployment
The app was deployed both for personal use and internally within PaySpot, where it helped create six structured books from development sessions.  

AI Knowledge Studio was also shared publicly on the Sourcegraph showcase, highlighting its potential as a **tool for knowledge capture and presentation**.


![Editor Screenshot](images/projects/project-a/Toc.png)
![Live Preview Screenshot](images/projects/project-a/Sidebar.png)