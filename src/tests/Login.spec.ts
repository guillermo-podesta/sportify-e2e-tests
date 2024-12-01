import test, { expect } from "@playwright/test";
import { sportifyStorageStagePath } from "../utils/auth/auth-storage-stage";

test.use({storageState: sportifyStorageStagePath});

test.beforeEach(async ({page}) => {
    await page.goto("localhost:5213");

});

test.describe("Login", () => {
    test("Validar el login de un usuario final", async ({page}) =>{
        await expect(page.getByRole('link', { name: 'Bienvenido guille@user.com!' })).toBeVisible();
        
    });

    test("Verificar que el usuario se encuentra en la Home una vez logueado", async ({page}) => {
        await expect(page).toHaveURL("http://localhost:5213/Home/Index");
    });
});