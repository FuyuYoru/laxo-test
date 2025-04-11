// export const baseURL = "https://laxocrm-test.laxo.one/";
export const baseURL = "/api/";


export class ApiConfigs {
    public static signIn(login: string, pass: string) {
        return JSON.stringify([
            {
                "class": "user_session",
                "method": "auth",
                "param": {
                    "login": login,
                    "pass": pass
                },
                "sid": null
            }
        ])
    }

    public static getRoles() {
        return JSON.stringify(
            [
                {
                    "class": "role",
                    "method": "get_list",
                    "param": "",
                    "sid": "92bdf303e77ffcbdd8b26ff6cc6d35a1471b1d706692d6a707cf15b997dd7724"
                }
            ])
    }
}