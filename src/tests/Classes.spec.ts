import test, { expect } from "@playwright/test";
import { sportifyStorageStagePath } from "../utils/auth/auth-storage-stage";
import { clickAtCreateANewClass, clickAtCreateButton, clickAtDeleteButton, clickAtDeleteModalbutton, fillClassesForm, goToClassesPage } from "../pages/Classes-page";

test.use({storageState: sportifyStorageStagePath});

test.beforeEach( async ({page}) => {
    await page.goto("Localhost:5213");
    await goToClassesPage(page);
});

test.describe.serial("Classes", () => {
    test("Crear una nueva clase de prueba", async ({page}) => {
        await clickAtCreateANewClass(page);
        await fillClassesForm(page);

        await clickAtCreateButton(page);

        await expect(page.getByRole("cell", {name: "Clase de Testing"})).toBeVisible();
    });

    test("Eliminar la clase previamente creada", async ({page}) => {
        await clickAtDeleteModalbutton(page);
        await clickAtDeleteButton(page);
    });
});