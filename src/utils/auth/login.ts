import { chromium, Page } from "@playwright/test";
import { sportifyStorageStagePath } from "./auth-storage-stage";

const sportifyLogin = async () => {
    const browser = await chromium.launch();

    const page = await browser.newPage();

    await page.goto("localhost:8080", {waitUntil: "load"});

    await page.getByRole('link', { name: 'Iniciar Sesión' }).click();
    await page.getByPlaceholder("nombre@gmail.com").fill("admin@sportify.com");
    await page.getByPlaceholder("contraseña").fill("Sportify123!");

    await page.getByRole("button", {name: "Iniciar sesión"}).click();

    await page.context().storageState({path: sportifyStorageStagePath});

    await browser.close();
};

export {sportifyLogin}