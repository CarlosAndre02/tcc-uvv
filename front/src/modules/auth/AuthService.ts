import { AxiosError } from "axios";

import axios from "../../services/axios";

export const loginUser = async (
  email: string,
  password: string
): Promise<{ token: string; userId: string; ehAdm: boolean }> => {
  try {
    const response = await axios.post("/auth", { email, password });
    const { token, userId, ehAdm } = response.data;
    return { token, userId, ehAdm };
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data.message);
    } else {
      throw new Error("Um erro inesperado aconteceu. Tente novamente");
    }
  }
};

export const createUser = async (
  email: string,
  nome: string,
  senha: string,
  dataNascimento: Date
): Promise<any> => { // eslint-disable-line
  try {
    const response = await axios.post("/user", {
      email,
      nome,
      senha,
      dataNascimento,
    });
    const { user } = response.data;
    return { user };
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(e.response?.data.message);
    } else {
      throw new Error("Um erro inesperado aconteceu. Tente novamente");
    }

}
};
