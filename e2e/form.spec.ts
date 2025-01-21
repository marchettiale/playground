import { test } from '@playwright/test';
import { FormPage } from '../pages/formPage';
import { NEW_USERS } from '../constants/newUsers';

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
