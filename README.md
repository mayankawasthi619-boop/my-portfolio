# Mayank Awasthi - Developer Portfolio

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-4-purple)
![Docker](https://img.shields.io/badge/Docker-Ready-blue)

![Live Demo](https://img.shields.io/badge/Live-Demo_Placeholder-success)

A complete, production-ready, highly responsive personal developer portfolio showcasing skills, experience, academic projects, and publications.

## Screenshots
_Placeholder for final design screenshots. (Add your screenshots to the `src/assets` folder and link them here)._


## Tech Stack
- **Frontend Framework:** React.js
- **Build Tool:** Vite
- **Styling:** CSS3 variables, Flexbox, CSS Grid (Glassmorphism & animations)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Containerization:** Docker & Docker Compose
- **Serving:** Nginx (for Docker build)

## Local Setup

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
   cd "my-portfolio"
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


## Docker Setup

### Steps to Build and Run with Docker
1. Make sure Docker and Docker Compose are installed and running.
2. Build and run via docker-compose:
   ```bash
   docker-compose up -d --build
   ```
3. Access the application on `http://localhost:8080`.
4. To stop the container, run:
   ```bash
   docker-compose down
   ```

## Deploying to Production

### Option A: GitHub Pages (Free, Static)
1. In `vite.config.js`, ensure you have defined your base path as the repository name if needed (e.g. `base: '/my-portfolio/'`).
2. Update the `"homepage"` key in `package.json` to match your GitHub Pages domain: `https://<YOUR_USERNAME>.github.io/<YOUR_REPO_NAME>`.
3. To deploy, simply run:
   ```bash
   npm run deploy
   ```
   This command creates a production build and publishes the `dist` folder to the `gh-pages` branch.

### Option B: Vercel (Free, Recommended)
1. **Using Vercel Dashboard:**
   - Push your code to GitHub.
   - Go to [Vercel](https://vercel.com/) and create a new project.
   - Import your GitHub repository.
   - The Framework Preset should automatically be configured to "Vite".
   - Click **Deploy**.

2. **Using Vercel CLI:**
   - Install Vercel CLI:
     ```bash
     npm i -g vercel
     ```
   - Run the deployment:
     ```bash
     vercel
     ```
   - For a production deployment, run:
     ```bash
     vercel --prod
     ```

### Option C: Docker on a VPS (DigitalOcean / AWS / Render)
1. SSH into your remote server and clone the repository.
   ```bash
   git clone https://github.com/mayankawasthi619-boop/my-portfolio.git
   cd my-portfolio
   ```
2. Build and run using Docker Compose in detached mode.
   ```bash
   docker-compose up -d --build
   ```
3. Setup an Nginx reverse proxy on your server to point your domain to the Docker container port (`8080`).
   Example `/etc/nginx/sites-available/portfolio` configuration:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;
       
       location / {
           proxy_pass http://localhost:8080;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       }
   }
   ```
4. Enable the configuration and restart Nginx:
   ```bash
   ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
   nginx -t
   systemctl restart nginx
   ```

## License
This project is licensed under the MIT License.
