import { sportifyLogin } from "./src/utils/auth/login"

const globalSetup = () => {
    Promise.all([sportifyLogin()])
}

export default globalSetup;
