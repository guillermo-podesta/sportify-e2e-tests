import { Page } from "@playwright/test";

const goToPaymentsPage = async (page: Page) => {
    await page.locator('li').filter({ hasText: 'Subscripciones Toggle' }).getByRole('button').click();
    await page.getByRole('link', { name: 'Gestionar Subscripciones' }).click();
};


const clickAtCreateNewPayment = async (page: Page) => {
    await page.getByRole('link', { name: 'Crear nuevo Pago' }).click();
};

const fillPaymentsForm = async (page: Page, planOption: string) => { 
    await page.locator('#plansSelect').selectOption(planOption);
    await page.getByLabel('Seleccionar Método de Pago').selectOption('2');
    await page.getByLabel('Ingrese número de Tarjeta').fill('4344443353544663');
    await page.locator('#Fecha').fill('2025-12');
    await page.getByLabel('Ingrese código de seguridad').fill('252');
};

const clickAtPayButton = async (page: Page) => {
    await page.getByRole('button', { name: 'Pagar' }).click();
};

export {goToPaymentsPage, clickAtCreateNewPayment, fillPaymentsForm, clickAtPayButton};