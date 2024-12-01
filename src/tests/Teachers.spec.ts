import test, { expect } from "@playwright/test";
import { sportifyStorageStagePath } from "../utils/auth/auth-storage-stage";
import { clickAtCreateANewTeacher, clickAtCreateTeacher, fillTeachersForm, goToTeachersPage } from "../pages/Teachers-page"

test.use({storageState: sportifyStorageStagePath});

test.beforeEach(async ({page}) => {
    await page.goto("Localhost:5213");
    await goToTeachersPage(page);
});

test.describe.serial("Teachers", () => {
    test("Crear un nuevo profesor de prueba", async ({page}) =>{
        await clickAtCreateANewTeacher(page);
        await fillTeachersForm(page);

        await clickAtCreateTeacher(page);

        await expect(page.getByRole("cell", {name: "Profesor de Prueba"})).toBeVisible();
    });

    test.only("Eliminar el profesor previamente creado", async ({page}) =>{
        await page.waitForTimeout(5000);
    });
});