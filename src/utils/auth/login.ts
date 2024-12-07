import { chromium, Page } from "@playwright/test";

const sportifyLogin = async () => {
    const browser = await chromium.launch();

    const page = await browser.newPage();

    await page.goto("localhost:5213");

    await page.getByRole('link', { name: 'Iniciar Sesión' }).click();
    await page.getByPlaceholder("nombre@gmail.com").fill("admin@sportify.com");
    await page.getByPlaceholder("contraseña").fill("Sportify123!");

    await page.getByRole("button", {name: "Iniciar sesión"}).click();

    await page.context().storageState({path: "src/utils/auth/sportify-storage-stage.json"});

    await browser.close();
};

export {sportifyLogin}