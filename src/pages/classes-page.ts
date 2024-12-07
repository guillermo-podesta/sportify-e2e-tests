import { Page } from "@playwright/test";

const goToClassesPage = async (page: Page) => {
    await page.locator('li').filter({ hasText: 'Clases Toggle Dropdown Cargar' }).getByRole('button').click();
    await page.getByRole('link', { name: 'Gestionar Clases' }).click();
};

const clickAtCreateANewClass = async (page: Page) => {
    await page.getByRole('link', { name: 'Crear nueva clase' }).click();
};

const fillClassesForm = async (page: Page) => {
    await page.getByPlaceholder('Nombre de la clase').fill('Clase de Testing');
    await page.getByLabel('Actividad').selectOption('5');
    await page.getByPlaceholder('Horario').fill('2024-12-15T15:00');
    await page.getByLabel('Profesor').selectOption('2');
    await page.getByPlaceholder('Cupo de la clase').fill('12');
};

const clickAtCreateButton = async (page: Page) => {
    await page.getByRole('button', { name: 'Crear' }).click();
};

const clickAtDeleteModalbutton = async (page: Page) => {
    await page.getByRole('row', { name: 'Clase de Testing Musculación' }).getByRole('link').nth(2).click();
};

const clickAtDeleteButton = async (page: Page) => {
    await page.getByRole('button', { name: 'Borrar' }).click();
};

export {goToClassesPage, clickAtCreateANewClass, fillClassesForm, clickAtCreateButton, clickAtDeleteModalbutton, clickAtDeleteButton};