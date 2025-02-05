const successMessage = 'O formulário foi enviado com sucesso.';
const errorMessages = {
  name: 'O campo nome é obrigatório.',
  email: 'O campo email é obrigatório.',
  pass: 'O campo senha é obrigatório.',
  country: 'O campo país é obrigatório.',
  gender: 'O campo gênero é obrigatório.',
};

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
  emptyFieldsErrorMessage: {
    nameErrorMessage: errorMessages.name,
    emailErrorMessage: errorMessages.email,
    passErrorMessage: errorMessages.pass,
    coutryErrorMessage: errorMessages.country,
    genderErrorMessage: errorMessages.gender,
  },
};
