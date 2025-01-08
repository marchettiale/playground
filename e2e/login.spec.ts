import { test, expect } from '@playwright/test';
import { Login } from '../pages/login';
import { TEST_USERS } from '../constants/users';

// Validar elementos de tela e Instruções Pre-login
test('Validar instruções de login', async ({ page }) => {
  const login = new Login(page);

  await test.step('Acessar a página de login', async () => {
    await login.goToLogin();
  });
  await test.step('Validar instruções de login', async () => {
    await login.validateLoginInstructions();
  });
  await test.step('Validar Login Labels', async () => {
    await login.validateLoginLabels('Login', 'Usuário', 'Senha', 'Logar');
    //######## Depois de trabalhar com "user.ts", criar Objetos para Labels #####//
  });
});

// fazer loging - novo teste
test('Fazer Login com Conta Regular', async ({ page }) => {
  const login = new Login(page);

  await test.step('Acessar a página de login', async () => {
    await login.goToLogin();
  });

  await test.step('Fazer login com Id e Pass', async () => {
    await login.loginWithRegularAccound(TEST_USERS.regular);
  });
});

// Usuário não encontrado!
test('Usuario não encontrado ', async ({ page }) => {
  const login = new Login(page); // ##-> Atenção

  await test.step('Acessar a página de login', async () => {
    await login.goToLogin();
  });
  await test.step('Fazer login com ID Invalido', async () => {
    await login.UserNotFound(TEST_USERS.invalid);
  });
});

test('Login - User or Pass Invalid', async ({ page }) => {
  const login = new Login(page);
  await test.step('Acessar a página de login', async () => {
    await login.goToLogin();
  });
  await expect(page.getByText('Instruções Login')).toBeVisible();
  await expect(page.getByText('Instruções Login')).toHaveText(
    'Instruções Login'
  );
  //##### Add wrong UserName. WRONG PASSWORD
  await test.step('Fazer Loging com Password Errado', async () => {
    await login.wrongPassword(TEST_USERS.wrongPassword);
  });
});

// ## temporarilyBlocked
test('Login - User temporarily blocked', async ({ page }) => {
  const login = new Login(page);
  await test.step('Acessar a página de login', async () => {
    await login.goToLogin();
  });

  await test.step('Errar Pass e clicar Log 03 vezes', async () => {
    await login.userTemporarilyBlocked(TEST_USERS.temporarilyBlocked);
  });
});

test('Login - User Blocked', async ({ page }) => {
  const login = new Login(page);
  await test.step('Acessar a página de login', async () => {
    await login.goToLogin();
  });
  await test.step('Inserir Conta bloqueada Id', async () => {
    await login.userBlocked(TEST_USERS.blocked);
  });
});

test('Login - UnBlock User', async ({ page }) => {
  const login = new Login(page);
  await test.step('Acessar a página de login', async () => {
    await login.goToLogin();
  });
  await test.step('Inserir Conta bloqueada Id', async () => {
    await login.userTemporarilyBlocked(TEST_USERS.temporarilyBlocked);
  });
  await test.step('Unblock User', async () => {
    await login.loginWithRegularAccound(TEST_USERS.regular);
  });
});
