import { Page } from "@playwright/test";

const goToUsersPage = async (page: Page) => {
    await page.getByRole('link', { name: 'Index Usuarios' }).click();
};

const getUserWithNoMedicalDocumentUploaded = async (page: Page) => {
    await page.locator('[id="user-admin\\@sportify\\.com"]').getByRole('cell', { name: 'Sin Subir' }).click();
    await page.getByRole('cell', { name: 'admin@sportify.com' }).click();
};

export {goToUsersPage, getUserWithNoMedicalDocumentUploaded};
