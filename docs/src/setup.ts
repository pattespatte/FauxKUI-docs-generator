import { createApp } from "vue";
import type { SetupOptions } from "@forsakringskassan/docs-generator";

/**
 * Setup function for Vue 3 integration with the docs generator.
 * This is called for each live example to mount the Vue component.
 */
export function setup(options: SetupOptions): void {
    const { rootComponent, selector } = options;
    const app = createApp(rootComponent);

    // Optionally add global plugins or configuration here
    // app.use(MyAwesomePlugin);

    app.mount(selector);
}
