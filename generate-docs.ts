import { Generator, defineSources, frontMatterFileReader, searchProcessor, topnavProcessor, cookieProcessor, versionProcessor, selectableVersionProcessor } from "@forsakringskassan/docs-generator";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

// Read package.json for version info
const pkg = JSON.parse(readFileSync(resolve("./package.json"), "utf-8"));

// Create the docs generator instance
const docs = new Generator(import.meta.url, {
    site: {
        name: "FauxKUI Design System",
        lang: "en",
    },
    setupPath: "docs/src/setup.ts",
    outputFolder: "docs/build",
    cacheFolder: ".cache/docs",
    exampleFolders: ["./src/components"],
    // Don't use custom templates - use built-in FK templates from docs-generator
    // templateFolders: ["./templates"],
    processors: [
        searchProcessor(),
        topnavProcessor("docs/topmenu.json", "FauxKUI Design System"),
        cookieProcessor(),
    ],
});

// Compile the documentation site styles
docs.compileStyle("docs", "./docs/src/docs-theme.scss", {
    appendTo: "head",
});

docs.compileStyle("docs-fkui", "./docs/src/fkui-theme.scss", {
    appendTo: "head",
});

// Compile the main JavaScript
docs.compileScript("main", "./docs/src/main.js", {
    appendTo: "body",
});

// Define the documentation sources using glob patterns
const sources = defineSources([
    {
        // Include the home page
        include: ["docs/index.md"],
        basePath: "docs",
        fileReader: frontMatterFileReader,
    },
    {
        // Include all markdown files in docs folder (gettingstarted, components, etc.)
        include: ["docs/*.md"],
        basePath: "docs",
        fileReader: frontMatterFileReader,
    },
    {
        // Include all markdown files in src/components
        include: ["src/components/**/*.md"],
        basePath: "./",
        fileReader: frontMatterFileReader,
    },
]);

// Check if this is being run for building or serving
const isServe = process.argv[2] === "serve";

if (isServe) {
    // Development mode with watch and livereload
    docs.build(sources);
    docs.serve();
} else {
    // Build mode
    docs.build(sources);
}
