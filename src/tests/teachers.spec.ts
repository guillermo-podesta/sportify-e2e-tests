import test, { expect } from "@playwright/test";
import { sportifyStorageStagePath } from "../utils/auth/auth-storage-stage";
import { clickAtCreateANewTeacher, clickAtCreateTeacher, clickAtDeleteButton, clickAtDeleteTeacherButton, fillTeachersForm, goToTeachersPage } from "@/pages/teachers-page";
import environmentVariables from "@/utils/auth/environment-variables";


test.use({storageState: sportifyStorageStagePath});

test.beforeEach(async ({page}) => {
    await page.goto(environmentVariables.SPORTIFY_URL);
    await goToTeachersPage(page);
});

test.describe.serial("Teachers", () => {
    test("Crear un nuevo profesor de prueba", async ({page}) =>{
        await clickAtCreateANewTeacher(page);
        await fillTeachersForm(page);

        await clickAtCreateTeacher(page);

        await expect(page.getByRole("cell", {name: "Profesor de Prueba"})).toBeVisible();
    });

    test("Eliminar el profesor previamente creado", async ({page}) =>{
        await clickAtDeleteTeacherButton(page);
        await clickAtDeleteButton(page);

        await expect(page.getByRole("cell", {name: "Profesor de Prueba"})).not.toBeVisible();
    });
});
