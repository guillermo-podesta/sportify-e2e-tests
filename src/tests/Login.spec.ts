import test, { expect } from "@playwright/test";
import { sportifyStorageStagePath } from "../utils/auth/auth-storage-stage";

test.use({storageState: sportifyStorageStagePath});

test.describe("Login", () => {
    test.only("Validar el login de un usuario final", async ({page}) =>{
        await page.goto("localhost:5213");
        await expect(page.getByRole('link', { name: 'Bienvenido guille@user.com!' })).toBeVisible();
        await expect(page).toHaveURL("http://localhost:5213/Home/Index");
    });
});