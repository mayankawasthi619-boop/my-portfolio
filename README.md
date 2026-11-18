# Mayank Awasthi - Developer Portfolio 🚀

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-7-purple)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.4+-green)
![Spring AI](https://img.shields.io/badge/Spring_AI-Enabled-brightgreen)
![Docker](https://img.shields.io/badge/Docker-Ready-blue)

A modern, high-performance personal developer portfolio showcasing full-stack AI platforms, enterprise Java/Spring Boot backends, intelligent document processing systems, and data analytics.

🔗 **Live Portfolio:** [https://mayankawasthi619-boop.github.io/my-portfolio/](https://mayankawasthi619-boop.github.io/my-portfolio/)

---

## 🌟 Featured Projects

### 1. [Personal AI Platform 🤖](https://github.com/mayankawasthi619-boop/personal-ai-system)
A private, modular, extensible Personal AI Assistant platform capable of running 100% locally or deployed to a private server.
- **Stack:** Java 21 LTS, Spring Boot 3.4+, Spring AI, PostgreSQL + pgvector, Redis, React 18, TypeScript, Tailwind CSS, Docker, Ollama
- **Key Features:**
  - Real-time SSE token streaming & context pruning
  - Multi-tier memory architecture (semantic pgvector + episodic + dynamic importance scoring)
  - Retrieval-Augmented Generation (RAG) across PDF, DOCX, TXT, CSV
  - Smart Model Router (local Ollama/llama.cpp/vLLM vs cloud OpenAI/Anthropic/Gemini)
  - Sandboxed tool execution engine (Docker containerized) & autonomous multi-step agents
  - Render Blueprint (`render.yaml`) automated zero-downtime deployment

### 2. [ResumeParser Dashboard 🚀](https://github.com/mayankawasthi619-boop/ResumeParser-Dashboard)
An intelligence-driven resume parsing system extracting structural parameters from PDF resumes in real-time.
- **Stack:** Java 17, Spring Boot 3.2, Apache PDFBox, React 18, Vite, REST APIs, In-Memory Cache
- **Key Features:**
  - Dynamic drag & drop upload dropzone
  - Regex-based contact extraction & layout-based candidate name detection
  - 70+ technical skill keyword tokenizer and section timeline mapper
  - Dual-view UI: Interactive Profile Dashboard + dark terminal JSON inspector with copy/download
  - In-memory session history for instant switching between recently parsed CVs

---

## 🛠️ Technical Stack
- **Languages:** Java 21 LTS, Python, TypeScript, JavaScript (ES6+), SQL, C++
- **Frameworks & Libraries:** Spring Boot 3.4+, Spring AI, React, Vite, Framer Motion, Tailwind CSS
- **AI / LLMs & Databases:** PostgreSQL (pgvector), Ollama, RAG Architectures, Redis, MySQL, SQLite, Scikit-Learn
- **DevOps & Cloud:** Docker, Docker Compose, Render Blueprint (`render.yaml`), GitHub Actions CI/CD

---

## 🚀 Local Setup

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/mayankawasthi619-boop/my-portfolio.git
   ```
2. Navigate into the directory:
   ```bash
   cd my-portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173`.

---

## 🌐 Deployment to GitHub Pages

To build and deploy the latest build to GitHub Pages:
```bash
npm run deploy
```

---

## 📄 License
This project is licensed under the MIT License.
