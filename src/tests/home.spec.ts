import { assertMainNavMenus } from "@/pages/home-page";
import { sportifyStorageStagePath } from "@/utils/auth/auth-storage-stage";
import environmentVariables from "@/utils/auth/environment-variables";
import test from "@playwright/test";

test.use({storageState: sportifyStorageStagePath});

test.beforeEach(async ({page}) => {
    await page.goto(environmentVariables.SPORTIFY_URL);
});

test.describe("Home", () => {
    test("Validar las opciones de la main nav", async ({page}) =>{
        await assertMainNavMenus(page);
    });
});