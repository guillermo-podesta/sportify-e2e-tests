import { expect, Page } from "@playwright/test";

const menuOptions = [
    "Usuarios",
    "Profesores",
    "Clases",
    "Reportes",
    "Disciplinas",
    "Subscripciones"
];

const assertMainNavMenus = async (page: Page) => {
    for(var i = 0; i < menuOptions.length; i++){
        await expect(page.getByRole("link", {name: menuOptions[i]})).toBeVisible();
    }
};

export {assertMainNavMenus};