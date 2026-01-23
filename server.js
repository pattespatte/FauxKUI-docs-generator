import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

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

// Serve HTML files for specific routes
app.get(/^\/gettingstarted\/?$/, (req, res) => {
    res.sendFile(path.join(BUILD_DIR, "gettingstarted.html"));
});

app.get(/^\/components\/?$/, (req, res) => {
    res.sendFile(path.join(BUILD_DIR, "components.html"));
});

app.get(/^\/guides\/?$/, (req, res) => {
    res.sendFile(path.join(BUILD_DIR, "guides.html"));
});

app.get(/^\/functions\/?$/, (req, res) => {
    res.sendFile(path.join(BUILD_DIR, "functions.html"));
});

app.get(/^\/styles\/?$/, (req, res) => {
    res.sendFile(path.join(BUILD_DIR, "styles.html"));
});

// Default route - serve index.html (home page)
app.use((req, res) => {
    res.sendFile(path.join(BUILD_DIR, "index.html"));
});

const server = createServer(app);
server.listen(PORT, () => {
    console.log(`\nDocumentation server running at http://localhost:${PORT}/`);
    console.log(`Serving files from: ${BUILD_DIR}`);
    console.log("\nPress Ctrl+C to stop\n");
});
