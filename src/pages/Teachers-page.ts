import { Page } from "@playwright/test";

const goToTeachersPage = async (page: Page) => {
    await page.locator('li').filter({ hasText: 'Profesores Toggle' }).getByRole('button').click();
    await page.getByRole('link', { name: 'Gestionar Profesores' }).click();
};

const clickAtCreateANewTeacher = async (page: Page) => {
    await page.getByRole('link', { name: 'Crear nuevo Profesor' }).click();
};

const fillTeachersForm = async (page: Page) => { 
    await page.getByLabel('Nombre').fill('Profesor de Prueba');
    await page.locator('#dni').fill('35456654');
    await page.locator('#email').fill('profe@prueba.com');
    await page.getByLabel('Telefono').fill('1156435654');
    await page.getByLabel('Dirección').fill('Paraguay 4100');
    await page.getByLabel('Actividades').selectOption('6');
};

const clickAtCreateTeacher = async (page: Page) => {
    await page.getByRole('button', { name: 'Crear' }).click();
};

const clickAtDeleteTeacherButton = async (page: Page) => {
    await page.getByRole('link', { name: 'Icono de eliminar' }).nth(3).click();
};

const clickAtDeleteButton = async (page: Page) => {
    await page.getByRole('button', { name: 'Borrar' }).click();
};

export {goToTeachersPage, clickAtCreateANewTeacher, fillTeachersForm, clickAtCreateTeacher, clickAtDeleteButton, clickAtDeleteTeacherButton};