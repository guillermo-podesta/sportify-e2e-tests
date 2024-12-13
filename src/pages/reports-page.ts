import { Page } from "@playwright/test";


const goToReportsPage = async (page: Page) => {
    await page.getByRole('link', { name: 'Index Reportes' }).click();    
};

const clickAtReportsPerClassButton = async (page: Page) => {
    await page.getByRole('button', { name: 'Reporte de Clases' }).click();
};

const getReportRows = async (page: Page) => {
    const reportRows = await page.getByTestId(`report-row-${getActualMonth()}`).all();
    
    return {reportRows};
};

const getActualMonth = () => {
    const date = new Date;
    const monthName = date.toLocaleString('default', { month: 'long' });
    
    return monthName;
};


export {goToReportsPage, clickAtReportsPerClassButton, getReportRows};