import { test as base, Page } from "@playwright/test";


export const test = base.extend<{ customPage: Page }>({

    customPage: async({ browser }, use) => {

        const context = await browser.newContext();
        const page = await context.newPage();

        await use(page);

        await context.close({ reason: "Test ended." });

    }

});