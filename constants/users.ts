export const TEST_USERS = {
  regular: {
    user: 'teste',
    password: 'password123',
    message: 'Usuário teste logado',
  },
  blocked: {
    user: 'testeblock',
    password: 'password123',
    message: 'Usuário bloqueado',
  },
  invalid: {
    user: 'invaliduser',
    password: 'password123',
    message: 'Usuário não encontrado!',
  },
  wrongPassword: {
    user: 'teste',
    password: 'password1234',
    message: '',
  },
};
