import { expect, test } from '@playwright/test';
import { FormPage } from '../pages/formPage';
import { NEW_USERS } from '../constants/newUsers';

test('Validar Placeholder de nome, Email e Senha', async ({ page }) => {
  const Form = new FormPage(page);
  await Form.goToForm();
  await Form.placeholdersText(NEW_USERS.previewPlaceHolders.namePlaceholder);
  await Form.placeholdersText(NEW_USERS.previewPlaceHolders.emailPlaceholder);
  await Form.placeholdersText(NEW_USERS.previewPlaceHolders.senhaPlaceholder);
});

test('Validar usuario com todos os campos preenchidos', async ({ page }) => {
  const Form = new FormPage(page);
  await Form.goToForm();
  await Form.inputName(NEW_USERS.allFields.name);
  await Form.inputEmail(NEW_USERS.allFields.email);
  await Form.inputPass(NEW_USERS.allFields.pass);
  await Form.selectCountry(NEW_USERS.allFields.country);
  await Form.selectGender(NEW_USERS.allFields.gender);
  await Form.inputHobbies(NEW_USERS.allFields.hobbies);
  await Form.submitForm();
  await Form.successMessage(NEW_USERS.allFields.expectedMessage);
});

test('Validar usuario com todos os campos obrigatórios preenchidos', async ({
  page,
}) => {
  const Form = new FormPage(page);
  await Form.goToForm();
  await Form.inputName(NEW_USERS.mandatoryFields.name);
  await Form.inputEmail(NEW_USERS.mandatoryFields.email);
  await Form.inputPass(NEW_USERS.mandatoryFields.pass);
  await Form.selectCountry(NEW_USERS.mandatoryFields.country);
  await Form.selectGender(NEW_USERS.mandatoryFields.gender);
  await Form.submitForm();
  await Form.successMessage(NEW_USERS.mandatoryFields.expectedMessage);
});

test('Validar mensagens de erro com todos os campos obrigatórios vazios', async ({
  page,
}) => {
  const Form = new FormPage(page);
  await Form.goToForm();
  await Form.submitForm();
  await Form.errorMessage(NEW_USERS.emptyFieldsErrorMessage.nameErrorMessage);
  await Form.errorMessage(NEW_USERS.emptyFieldsErrorMessage.emailErrorMessage);
  await Form.errorMessage(NEW_USERS.emptyFieldsErrorMessage.passErrorMessage);
  await Form.errorMessage(NEW_USERS.emptyFieldsErrorMessage.coutryErrorMessage);
  await Form.errorMessage(NEW_USERS.emptyFieldsErrorMessage.genderErrorMessage);
});

test('Validar mensagens de erro para Nome-Email', async ({ page }) => {
  const Form = new FormPage(page);
  await Form.goToForm();
  await Form.inputPass(NEW_USERS.mandatoryFields.pass);
  await Form.selectCountry(NEW_USERS.mandatoryFields.country);
  await Form.selectGender(NEW_USERS.mandatoryFields.gender);
  await Form.submitForm();
  await Form.errorMessage(NEW_USERS.emptyFieldsErrorMessage.nameErrorMessage);
  await Form.errorMessage(NEW_USERS.emptyFieldsErrorMessage.emailErrorMessage);
  await Form.notExpectedMessage(
    NEW_USERS.emptyFieldsErrorMessage.passErrorMessage
  );
  await Form.notExpectedMessage(
    NEW_USERS.emptyFieldsErrorMessage.coutryErrorMessage
  );
  await Form.notExpectedMessage(
    NEW_USERS.emptyFieldsErrorMessage.genderErrorMessage
  );
});

test('Validar mensagens de erro para Senha-País', async ({ page }) => {
  const Form = new FormPage(page);
  await Form.goToForm();
  await Form.inputName(NEW_USERS.mandatoryFields.name);
  await Form.inputEmail(NEW_USERS.mandatoryFields.email);
  await Form.selectGender(NEW_USERS.mandatoryFields.gender);
  await Form.submitForm();
  await Form.errorMessage(NEW_USERS.emptyFieldsErrorMessage.passErrorMessage);
  await Form.errorMessage(NEW_USERS.emptyFieldsErrorMessage.coutryErrorMessage);
  await Form.notExpectedMessage(
    NEW_USERS.emptyFieldsErrorMessage.nameErrorMessage
  );
  await Form.notExpectedMessage(
    NEW_USERS.emptyFieldsErrorMessage.emailErrorMessage
  );
  await Form.notExpectedMessage(
    NEW_USERS.emptyFieldsErrorMessage.genderErrorMessage
  );
});

test('Validar gênero is selected', async ({ page }) => {
  const Form = new FormPage(page);
  await Form.goToForm();
  await Form.selectGender(NEW_USERS.mandatoryFields.gender);
  await expect(page.getByLabel('Masculino')).toBeChecked();
  await expect(page.getByLabel('Feminino')).not.toBeChecked();
  await expect(page.getByLabel('Outro')).not.toBeChecked();
});

test('Validar Hobbie is selected', async ({ page }) => {
  const Form = new FormPage(page);
  await Form.goToForm();
  await Form.inputHobbies(NEW_USERS.allFields.hobbies);
  await Form.isHobbieSelected(NEW_USERS.allFields.hobbies);
  await expect(page.getByText('Jogos')).not.toBeChecked();
  await expect(page.getByLabel('Televisão')).not.toBeChecked();
  await expect(page.getByLabel('Cantar')).not.toBeChecked();
});
