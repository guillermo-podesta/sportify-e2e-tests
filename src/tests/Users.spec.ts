import test, { expect } from "@playwright/test";
import { sportifyStorageStagePath } from "../utils/auth/auth-storage-stage";
import { goToUsersPage } from "../pages/Users-page";

test.use({storageState: sportifyStorageStagePath});

test.beforeEach(async ({page}) => {
    await page.goto("Localhost:5213");
});

test.describe("Users", async () => {
    test("Validar que un usuario no tiene el Apto Medico cargado", async ({page}) => {
        await goToUsersPage(page);
      
        await expect(page.locator('[id="user-admin\\@sportify\\.com"]').getByRole('cell', { name: 'Sin Subir' })).toBeVisible();
        await expect(page.getByRole('cell', { name: 'admin@sportify.com' })).toBeVisible();
    });

    test("Validar que un usuario tiene el Apto Medico cargado", async ({page}) => {
        await goToUsersPage(page);
      
        await expect(page.locator('[id="user-guillermo\\@istea\\.com.ar"]').getByRole('cell', { name: 'Descargar Documento' })).toBeVisible();
        await expect(page.getByRole('cell', { name: 'guillermo@istea.com.ar' })).toBeVisible();
    });
});