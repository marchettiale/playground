import { TestUserType } from "../types/types";

export const TEST_USERS: TestUserType = {
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
    user: 'test',
    password: 'wrongPass3x',
    message: 'Usuário bloqueado temporariamente!', 
    
  },
};
