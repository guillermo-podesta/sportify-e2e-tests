import { clickAtReportsPerClassButton, getReportRows, goToReportsPage } from "@/pages/reports-page";
import { sportifyStorageStagePath } from "@/utils/auth/auth-storage-stage";
import environmentVariables from "@/utils/auth/environment-variables";
import test, { expect } from "@playwright/test";

test.use({storageState: sportifyStorageStagePath});

test.beforeEach(async ({page}) => {
    await page.goto(environmentVariables.SPORTIFY_URL);
    await goToReportsPage(page);
})

test.describe("Reports", () => {
    test("Validar que la tabla de reportes no venga vacia", async ({page}) =>{
        await clickAtReportsPerClassButton(page);

        const {reportRows} = await getReportRows(page);
        
        expect(reportRows.length).toBeGreaterThan(0);
    });
})

