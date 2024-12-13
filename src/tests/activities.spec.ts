import test, { expect } from "@playwright/test";
import { sportifyStorageStagePath } from "../utils/auth/auth-storage-stage";
import { clickAtCreateButton, clickAtCreateNewActivity, clickAtDeleteButton, clickAtDeleteTestingActivityModalButton, fillActivitiesForm, goToActivitiesPage } from "@/pages/activities-page";
import environmentVariables from "@/utils/auth/environment-variables";


test.use({storageState: sportifyStorageStagePath});

test.beforeEach(async ({page}) => {
    await page.goto(environmentVariables.SPORTIFY_URL);
    await goToActivitiesPage(page);
});

test.describe.serial("Activities", () => {
    test("Crear una nueva actividad de Testing", async ({page}) =>{
        await clickAtCreateNewActivity(page);
        await fillActivitiesForm(page);
        
        await clickAtCreateButton(page);

        await expect(page.getByRole('cell', { name: 'Actividad con fines de testing' })).toBeVisible();
    });

    test("Eliminar la actividad previamente creada", async ({page}) => {
        await clickAtDeleteTestingActivityModalButton(page);
        await clickAtDeleteButton(page);

        await expect(page.getByRole("cell", {name: "Actividad con fines de testting"})).not.toBeVisible();
    });
});
