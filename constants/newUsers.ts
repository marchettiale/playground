const successMessage = 'O formulário foi enviado com sucesso.';
const genders = {
  male: 'Masculino',
  female: 'Feminino',
  other: 'Outros',
};

export const NEW_USERS = {
  allFields: {
    name: 'Alessandro',
    email: 'alessandro@gmail.com',
    pass: 'test123',
    country: 'brazil',
    gender: genders.male,
    hobbies: ['Ler', 'Viajar', 'Esportes'],
    expectedMessage: successMessage,
  },
  mandatoryFields: {
    name: 'Bruno',
    email: 'bruno@gmail.com',
    pass: 'test123',
    country: 'brazil',
    gender: genders.male,
    expectedMessage: successMessage,
  },
};
