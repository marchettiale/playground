import { expect, Locator, Page } from '@playwright/test';
import { LOGIN_MESSAGE } from '../constants/users';
import { TUser } from '../types';

export class Login {
  page: Page;
  instructions: Locator;
  instructionsOne: Locator;
  instructionsTwo: Locator;
  instructionsThree: Locator;
  // Login
  loginBoxTitle: Locator;
  userNameLabel: Locator;
  userPasswordLabel: Locator;
  logarBtn: Locator;
  userName: Locator;
  userPass: Locator;
  // Messages
  loggedInMessage: Locator;
  notFoundUser: Locator;
  wrongUserOrPass: Locator;
  temporarilyBlockedMessage: Locator;
  userBlockedMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.instructions = this.page.getByText('Instruções Login');
    this.instructionsOne = this.page.locator('[id="instructionsLoginItem1"]');
    this.instructionsTwo = this.page.locator('[id="instructionsLoginItem2"]');
    this.instructionsThree = this.page.locator('[id="instructionsLoginItem3"]');
    // Login w/ User and Password
    this.loginBoxTitle = this.page.locator('[id="loginTitle"]');
    this.userNameLabel = this.page.locator('//label[@for="username"]');
    this.userPasswordLabel = this.page.locator('//label[@for="password"]');
    this.logarBtn = this.page.locator('[id="submitButton"]');

    this.userName = this.page.locator('[id="usernameInput"]');
    this.userPass = this.page.locator('[id="passwordInput"]');
    this.loggedInMessage = this.page.locator('[id="loggedInMessage"]');
    this.notFoundUser = this.page.locator('[id="statusNotFound"]');
    this.wrongUserOrPass = this.page.locator('[id="statusInvalidPass"]');
    this.temporarilyBlockedMessage = this.page.locator(
      '[id="statusTemporaryBlock"]'
    );
    this.userBlockedMessage = this.page.locator('[id="statusBlocked"]');
  }
  async goToLogin() {
    await this.page.goto('login');
  }
  async validateLoginInstructions() {
    await expect(this.instructions).toBeVisible();
    await expect(this.instructions).toHaveText('Instruções Login');
    await expect(this.instructionsOne).toBeVisible();
    await expect(this.instructionsOne).toHaveText(
      'Quando utilizar username e senha corretos, deve retornar usuário logado.'
    );
    await expect(this.instructionsTwo).toBeVisible();
    await expect(this.instructionsTwo).toHaveText(
      'Login ou senha incorretos devem retornar uma mensagem de erro.'
    );
    await expect(this.instructionsThree).toBeVisible();
    await expect(this.instructionsThree).toHaveText(
      'Três senhas incorretas bloqueiam a conta temporariamente.'
    );
  }

  async validateLoginLabels(loginTitle, userLabel, passLabel, LogBtnLabel) {
    await expect(this.loginBoxTitle).toBeVisible();
    await expect(this.loginBoxTitle).toHaveText(loginTitle);
    await expect(this.userNameLabel).toBeVisible();
    await expect(this.userNameLabel).toHaveText(userLabel);
    await expect(this.userPasswordLabel).toBeVisible();
    await expect(this.userPasswordLabel).toHaveText(passLabel);
    await expect(this.logarBtn).toHaveText(LogBtnLabel);
  }

  async loginWithRegularAccound(user: TUser) {
    await this.userName.fill(user.user);
    await this.userPass.fill(user.password);
    await this.logarBtn.click();
    await expect(this.loggedInMessage).toHaveText(LOGIN_MESSAGE.sucess);
  }

  async UserNotFound(user: TUser) {
    await this.userName.fill(user.user);
    await this.userPass.fill(user.password);
    await this.logarBtn.click();
    await expect(this.notFoundUser).toHaveText(LOGIN_MESSAGE.notFound);
  }

  async wrongPassword(user: TUser) {
    await this.userName.fill(user.user);
    await this.userPass.fill(user.password);
    await this.logarBtn.click();
    await expect(this.wrongUserOrPass).toHaveText(LOGIN_MESSAGE.wrongPass);
  }

  async userTemporarilyBlocked(user: TUser) {
    await this.userName.fill(user.user);
    await this.userPass.fill(user.password);

    const loginMessage = [
      LOGIN_MESSAGE.wrongPass,
      LOGIN_MESSAGE.wrongPass,
      LOGIN_MESSAGE.tempBlock,
    ];

    for (const message of loginMessage) {
      await this.logarBtn.click();
      await expect(this.page.getByText(message)).toBeVisible();
    }
  }

  async userBlocked(user: TUser) {
    await this.userName.fill(user.user);
    await this.userPass.fill(user.password);
    await this.logarBtn.click();
    await expect(this.userBlockedMessage).toHaveText(LOGIN_MESSAGE.blocked);
  }
}
