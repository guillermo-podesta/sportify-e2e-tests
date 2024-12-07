import { Page } from "@playwright/test";

const goToActivitiesPage = async (page: Page) => {
    await page.locator('li').filter({ hasText: 'Disciplinas Toggle Dropdown' }).getByRole('button').click();
    await page.getByRole('link', { name: 'Gestionar Actividades' }).click();
};

const clickAtCreateNewActivity = async (page: Page) => {
    await page.getByRole('link', { name: 'Crear nueva Actividad' }).click();
};

const fillActivitiesForm = async (page: Page) => {
    await page.getByLabel('Nombre').fill('Actividad de Prueba');
    await page.getByLabel('Descripción').fill('Actividad con fines de testing');
};

const clickAtCreateButton = async (page: Page) => {
    await page.getByRole('button', { name: 'Crear' }).click();
};

const clickAtDeleteTestingActivityModalButton = async (page: Page) => {
    await page.getByRole('row', { name: 'Actividad de Prueba Actividad' }).getByRole('link').nth(2).click();
};

const clickAtDeleteButton = async (page: Page) => {
    await page.getByRole('button', { name: 'Borrar' }).click();
};

export {
    goToActivitiesPage,
    clickAtCreateNewActivity,
    fillActivitiesForm,
    clickAtCreateButton,
    clickAtDeleteTestingActivityModalButton,
    clickAtDeleteButton
};
