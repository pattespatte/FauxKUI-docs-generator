// Simple main.js for FauxKUI documentation
// This initializes the docs-generator runtime without FKUI dependencies

import "@forsakringskassan/docs-generator/runtime";

// Basic initialization without FKUI icon library
// The docs-generator runtime will handle search, navigation, etc.
console.log("FauxKUI Design System documentation loaded");

// // Remove markdown heading anchor links
// document.addEventListener('DOMContentLoaded', () => {
// 	document.querySelectorAll('.header-anchor').forEach(anchor => {
// 		anchor.remove();
// 	});
// }); 