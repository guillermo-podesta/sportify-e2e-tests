import { sportifyLogin } from "./src/utils/auth/login"

const globalSetup = async () => {
    Promise.all([sportifyLogin()])
}

export default globalSetup;