import { ApiConfigs, baseURL } from "../apiConfigs"

export const signIn = async (login: string, pass: string) => {
    // const requestParams = ApiConfigs.signIn(login, pass);
    const requestParams = ApiConfigs.getRoles();

    try {
        const response = await fetch(baseURL, {
            method: "POST",
            headers: {
                // "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: requestParams,
            // mode: "no-cors",
            credentials: "include",
        });

        console.log(response);
        if (!response.ok) {
            throw new Error("Неверный логин/пароль");
        }

        return response.text();
    } catch (err) {
        throw new Error("Ошибка авторизации!");
    }
};
