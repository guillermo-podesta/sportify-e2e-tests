import { chromium } from "@playwright/test";
import { sportifyStorageStagePath } from "./auth-storage-stage";
import environmentVariables from "./environment-variables";

const userEmail = environmentVariables.USER_EMAIL;
const userPassword = environmentVariables.USER_PASSWORD;

const sportifyLogin = async () => {
    const browser = await chromium.launch();

    const page = await browser.newPage();

    await page.goto(environmentVariables.SPORTIFY_URL, {waitUntil: "load"});

    await page.getByRole('link', { name: 'Iniciar Sesión' }).click();
    await page.getByPlaceholder("nombre@gmail.com").fill(userEmail);
    await page.getByPlaceholder("contraseña").fill(userPassword);

    await page.getByRole("button", {name: "Iniciar sesión"}).click();

    await page.context().storageState({path: sportifyStorageStagePath});

    await browser.close();
};

export {sportifyLogin}