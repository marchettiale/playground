import { expect, Page } from '@playwright/test';
import { NEW_USERS } from '../constants/newUsers';

export class FormPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToForm() {
    await this.page.goto('form');
  }

  async validateLabel(value: string) {
    await expect(this.page.getByText(value + ' *')).toBeVisible();
    await expect(this.page.getByText(value + ' *')).toHaveText(value + ' *');
  }

  async inputName(name: string) {
    await this.validateLabel('Nome');
    await this.page.getByPlaceholder('Digite seu nome').fill(name);
  }

  async inputEmail(email: string) {
    await this.validateLabel('Email');
    await this.page.getByPlaceholder('Digite seu e-mail').fill(email);
  }

  async inputPass(pass: string) {
    await this.validateLabel('Senha');
    await this.page.getByPlaceholder('Digite sua senha').fill(pass);
  }

  async selectCountry(country: string) {
    await this.page.getByLabel('País *').selectOption(country);
  }

  async selectGender(gender: string) {
    await this.page.getByLabel(gender).click();
  }

  async inputHobbies(hobbies: string[]) {
    for (const hobbie of hobbies) {
      await this.page.getByLabel(hobbie).click();
    }
  }

  async submitForm() {
    await this.page.getByRole('button', { name: 'Enviar' }).click();
  }

  async successMessage(message: string) {
    await expect(
      this.page.locator('[class="font-bold text-2xl mb-4"]')
    ).toHaveText('Sucesso!');
    await expect(
      this.page.getByText('O formulário foi enviado com')
    ).toHaveText(message);
  }
}
