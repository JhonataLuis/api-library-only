# Frontend (React)

This folder contains a minimal Create-React-App style frontend for the To-Do List project.

Quick start (from repository root):

```powershell
cd frontend
npm install
npm start
```

Notes:
- The React dev server proxies API requests to the backend at http://localhost:8080 (see `package.json` "proxy").
- To produce static assets that can be served by Spring Boot, run `npm run build` and then copy the `build/` folder contents into `src/main/resources/static/` or configure your deployment pipeline to serve the built files.
