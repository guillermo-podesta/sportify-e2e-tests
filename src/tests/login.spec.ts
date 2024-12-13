import test, { expect } from "@playwright/test";
import { sportifyStorageStagePath } from "@/utils/auth/auth-storage-stage";
import environmentVariables from "@/utils/auth/environment-variables";

test.use({storageState: sportifyStorageStagePath});

test.beforeEach(async ({page}) => {
    await page.goto(environmentVariables.SPORTIFY_URL);

});

test.describe("Login", () => {
    test("Validar el login de un admin", async ({page}) =>{
        await expect(page.getByRole('link', { name: `Bienvenido ${environmentVariables.USER_EMAIL}!` })).toBeVisible();
        
    });

    test("Verificar que el usuario se encuentra en la Home una vez logueado", async ({page}) => {
        await expect(page).toHaveURL(`${environmentVariables.SPORTIFY_URL}/Home/Index`);
    });
});