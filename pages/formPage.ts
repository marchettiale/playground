import { expect, Page } from '@playwright/test';

export class FormPage {
  // - sempre add da biblioteca p/ PageObjects
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Method - a ser chamado no SPEC file que roda o teste
  async goToForm() {
    await this.page.goto('form');
  }

  //** */ Metodo Generico pra qualquer Label, no formato abaixo.
  async validateLabel(value: string) {
    await expect(this.page.getByText(value + ' *')).toBeVisible();
    await expect(this.page.getByText(value + ' *')).toHaveText(value + ' *');
    // ** consome em outro metodo // inputName
  }
  // * Validar PlaceHolders Geters em um metodo e passar eles em outro //
  async placeHolders(value: string) {
    await expect(this.page.getByPlaceholder(value)).toBeVisible();
    const placeholder = await this.page
      .getByPlaceholder(value)
      .getAttribute('placeholder');
    expect(placeholder).toBe(value);
  }
  async validatePlaceHolder() {
    await this.placeHolders('Digite seu nome');
    await this.placeHolders('Digite seu e-mail');
    await this.placeHolders('Digite sua senha');
    // await this.placeHolders(texto);
  }

  async validateNameField() {
    await expect(this.page.getByPlaceholder('Digite seu nome')).toBeVisible();
  }

  async inputName(name: string) {
    // aqui além do input name tem aproveitamento do metodo validateLabel..
    await this.validateLabel('Nome');
    await this.validateLabel('Email');
    await this.validateLabel('Senha');
    await this.validateLabel('País');
    await this.validateLabel('Gênero');
    // await this.validateNameField();
    await this.page.getByPlaceholder('Digite seu nome').fill(name);
  }

  // OLD WAY //
  async addNameEmailPass(name: string, email: string, pass: string) {
    await this.page.getByPlaceholder('Digite seu nome').fill(name);
    await this.page.getByPlaceholder('Digite seu e-mail').fill(email);
    await this.page.getByPlaceholder('Digite sua senha').fill(pass);
  }
  async selectCountry() {
    await this.page.getByLabel('País *').selectOption('brazil');
  }
  async selectGender(gender: string) {
    await this.page.getByLabel(gender).click();
  }
  async selectLazer(lazer: string) {
    await this.page.getByText(lazer).click();
  }
  async successMessage() {
    await expect(
      this.page.locator('[class="font-bold text-2xl mb-4"]')
    ).toHaveText('Sucesso!');
    await expect(this.page.locator('[class="text-lg"]')).toHaveText(
      'O formulário foi enviado com sucesso.'
    );
  }

  // Error Messages //
  async validateErrorMessages() {
    await expect(this.page.locator('[id="nameError"]')).toHaveText(
      'O campo nome é obrigatório.'
    );
    await expect(this.page.locator('[id="emailError"]')).toHaveText(
      'O campo email é obrigatório.'
    );
    await expect(this.page.locator('[id="passwordError"]')).toHaveText(
      'O campo senha é obrigatório.'
    );
    await expect(this.page.locator('[id="countryError"]')).toHaveText(
      'O campo país é obrigatório.'
    );
    await expect(this.page.locator('[id="genderError"]')).toHaveText(
      'O campo gênero é obrigatório.'
    );
  }

  async validateFormInstructions() {
    await expect(this.page.locator('[id="instructionsFormItem1"]')).toHaveText(
      'Preencha todos os campos obrigatórios: nome, email, senha, país e gênero.'
    );
    await expect(this.page.locator('[id="instructionsFormItem2"]')).toHaveText(
      'Escolha suas preferências de lazer marcando as opções correspondentes.'
    );
    await expect(this.page.locator('[id="instructionsFormItem3"]')).toHaveText(
      'Após o envio do formulário, você receberá uma mensagem de confirmação indicando se o cadastro foi realizado com sucesso.'
    );
  }
}
