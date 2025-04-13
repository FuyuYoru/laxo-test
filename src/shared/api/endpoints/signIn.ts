import { ApiConfigs, baseURL } from "../apiConfigs";

export const signIn = async (login: string, pass: string) => {
  const requestParams = ApiConfigs.signIn(login, pass);

  try {
    const response = await fetch(baseURL, {
      method: "POST",
      body: requestParams,
      //   mode: "no-cors",
      //   credentials: "include",
      redirect: "follow",
    });

    if (!response.ok) {
      throw new Error("Ошибка авторизации");
    }

    const data = await response.json();

    if (data[0].code !== 200) {
      throw new Error("Ошибка авторизации");
    }

    return data[1].response;
  } catch (err) {
    throw err;
  }
};
