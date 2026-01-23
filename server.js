import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 8080;
const BUILD_DIR = path.join(__dirname, "docs", "build");

const app = express();

// Serve static assets (CSS, JS, images)
app.use("/assets", express.static(path.join(BUILD_DIR, "assets")));
app.use("/src", express.static(path.join(BUILD_DIR, "src")));

// Serve JSON files
app.get(/\.json$/, (req, res) => {
    res.sendFile(path.join(BUILD_DIR, req.path));
});

// Handle all routes - serve docs/index.html as the main page
app.use((req, res) => {
    res.sendFile(path.join(BUILD_DIR, "docs", "index.html"));
});

const server = createServer(app);
server.listen(PORT, () => {
    console.log(`\nDocumentation server running at http://localhost:${PORT}/`);
    console.log(`Serving files from: ${BUILD_DIR}`);
    console.log("\nPress Ctrl+C to stop\n");
});
