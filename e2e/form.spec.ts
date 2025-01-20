import { test, expect } from '@playwright/test';
import { FormPage } from '../pages/formPage';

test('Validar Form', async ({ page }) => {
  const Form = new FormPage(page);
  await Form.goToForm();
  await Form.inputName('Alessandro');
  // await Form.validateNameField();
  // await Form.validateNameLabel('Nome');

  //mapeamento geral fora da Page //
  await page.getByPlaceholder('Digite seu e-mail').fill('email@email.com');
  await page.getByPlaceholder('Digite sua senha').fill('Abc12335');

  await page.getByLabel('País *').selectOption('brazil');

  await page.getByText('Masculino').click();
  // 'Feminino' //  'Outros'
  // Lazer
  await page.getByText('Ler').click();
  await page.getByText('Jogos').click();
  await page.getByText('Televisão').click();
  await page.getByText('Viajar').click();
  await page.getByText('Esportes').click();
  await page.getByText('Cantar').click();

  await page.getByRole('button', { name: 'Enviar' }).click();
});

test('Cadastro - Todos os Campos', async ({ page }) => {
  const Form = new FormPage(page);
  await Form.goToForm();

  await Form.addNameEmailPass('Joao Campo', 'email@email.com', 'abc1234');
  await Form.selectCountry();
  await Form.selectGender('Masculino');
  await Form.selectLazer('Viajar');
  await page.getByRole('button', { name: 'Enviar' }).click();
  await Form.successMessage();
});

test('Cadastro - Somente campos obrigatórios', async ({ page }) => {
  const Form = new FormPage(page);
  await Form.goToForm();

  await Form.addNameEmailPass('Joao Campo', 'email@email.com', 'abc1234');
  await Form.selectCountry();
  await Form.selectGender('Masculino');

  await page.getByRole('button', { name: 'Enviar' }).click();
  await Form.successMessage();
});

test('Cadastro - Nenhum campo preenchido', async ({ page }) => {
  const Form = new FormPage(page);
  await Form.goToForm();
  await page.getByRole('button', { name: 'Enviar' }).click();
  await Form.validateErrorMessages();
});

// Instruçoes do Cadastro
test('Validar Instruções do Cadastro', async ({ page }) => {
  const Form = new FormPage(page);
  await Form.goToForm();
  await Form.validateFormInstructions();
});

test('Validar PlaceHolders Content', async ({ page }) => {
  const Form = new FormPage(page);
  await Form.goToForm();
  await Form.validatePlaceHolder('Alex', 'alex@ElementInternals.com', '$12345');

  await page.getByRole('button', { name: 'Enviar' }).click();
  // Opção = validar duas mensagens de erros - País e Gˆ
});
// Is all checkBoxes selected
