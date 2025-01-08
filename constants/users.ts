import { TUserMessage, TUsers } from "../types";


export const TEST_USERS: TUsers = {
  regular: {
    user: 'teste',
    password: 'password123',
    message: 'Usuário teste logado',
  },
  blocked: {
    user: 'testeblock',
    password: 'password123',
    message: 'Usuário bloqueado!',
  },
  invalid: {
    user: 'invaliduser',
    password: 'password123',
    message: 'Usuário não encontrado!',
  },
  wrongPassword: {
    user: 'teste',
    password: 'password1234',
    message: 'Usuário ou senha estão incorretos!',
  },
  temporalilyBlocked: {
    user: 'teste',
    password: 'wrongPass3x',
    message: 'Usuário bloqueado temporariamente!',
  },
};

export const LOGIN_MESSAGE: TUserMessage = {
  sucess: 'Usuário teste logado',
  blocked: 'Usuário bloqueado!',
  notFound: 'Usuário não encontrado!',
  wrongPass: 'Usuário ou senha estão incorretos!',
  tempBlock: 'Usuário bloqueado temporariamente!',

};
