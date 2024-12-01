import test, { expect } from "@playwright/test";
import { sportifyStorageStagePath } from "../utils/auth/auth-storage-stage";
import { clickAtCreateNewPayment, clickAtPayButton, fillPaymentsForm, goToPaymentsPage } from "../pages/Payments-page";

test.use({storageState: sportifyStorageStagePath});

test.beforeEach(async ({page}) => {
    await page.goto("Localhost:5213");
    await goToPaymentsPage(page);
});

test.describe("Payments", () => {
    test("Crear un nuevo pago de plan Basico", async ({page}) => {
        await clickAtCreateNewPayment(page);
        await fillPaymentsForm(page, "1");
        
        await clickAtPayButton(page);

        await expect(page.getByRole('cell', { name: 'Básico' }).last()).toBeVisible();
        await expect(page.getByRole('cell', { name: '20000,00' }).last()).toBeVisible();
    });

    test("Crear un nuevo pago de plan Premium", async ({page}) => {
        await clickAtCreateNewPayment(page);
        await fillPaymentsForm(page, "2");
        
        await clickAtPayButton(page);

        await expect(page.getByRole('cell', { name: 'Premium' }).last()).toBeVisible();
        await expect(page.getByRole('cell', { name: '30000,00' }).last()).toBeVisible();
    });
});