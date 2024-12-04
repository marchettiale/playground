import { test, expect } from "@playwright/test";
import { Login } from "../pages/login";


test("Validar instruções de login", async ({ page }) => {
  const login = new Login(page);

  await test.step("Acessar a página de login", async () => {
    await login.goToLogin();
  });

  await test.step("Validar instruções de login", async () => {
    await login.validateLoginInstructions();
  });

  await test.step("Validar Login Labels", async () => { 
    await login.validateLoginLabels('Login', 'Usuário', 'Senha', 'Logar');
  });

});

// fazer loging novo teste
test("Fazer Login com Conta Regular", async ({ page }) => {
  const login = new Login(page);

  await test.step("Acessar a página de login", async () => {
    await login.goToLogin();
  });

  await test.step("Fazer login com Id e Pass", async () => {
    await login.loginWithRegularAccound('Teste', 'password123', 'Usuário teste logado');

  });

});

// Usuário não encontrado!
test("Usuario não encontrado ", async ({ page }) => {
  const login = new Login(page);
  await test.step("Acessar a página de login", async () => {
    await login.goToLogin();
  });
  await test.step("Fazer login com ID Invalido", async () => {
    await login.UserNotFound('Testex', 'password123', 'Usuário não encontrado!');

  });

});


test("Login - User not found", async ({ page }) => {

  await page.goto("login");

  await expect(page.getByText("Instruções Login")).toBeVisible();
  await expect(page.getByText("Instruções Login")).toHaveText("Instruções Login");
  // Add wrong UserNAme.
  await page.getByPlaceholder("Digite seu usuário").fill("testeSSS");
  await page.getByPlaceholder("Digite sua senha").fill("password123");
  await page.getByRole("button", { name: "Logar" }).click();
  await page.getByText("Usuário não encontrado!").click();
  await expect(page.locator("#statusNotFound")).toBeVisible();
  await expect(page.locator("#statusNotFound")).toHaveText("Usuário não encontrado!");

  await expect(page.getByText("Usuário não encontrado!")).toBeVisible();
  await expect(page.getByText("Usuário não encontrado!")).toHaveText(
    "Usuário não encontrado!"
  );
});

test.skip("Login - User Or Pass Incorrect", async ({ page }) => {
  await page.goto("login");
  await expect(page.getByText("Instruções Login")).toBeVisible();
  await expect(page.getByText("Instruções Login")).toHaveText("Instruções Login");
  // Add wright UserNAme but whrong Pass and hit LOG once
  await page.getByPlaceholder("Digite seu usuário").fill("teste");
  await page.getByPlaceholder("Digite sua senha").fill("password123");
  await page.getByRole("button", { name: "Logar" }).click();
  await expect(page.getByText("Usuário não encontrado!")).toBeVisible();
  await expect(page.getByText("Usuário não encontrado!")).toHaveText(
    "Usuário não encontrado!"
  );
});

test("Login - User temporarily blocked", async ({ page }) => {
  await page.goto("login");
  await page.getByPlaceholder("Digite seu usuário").fill("teste");
  await page.getByPlaceholder("Digite sua senha").fill("passwordERROR");
  // Add wright UserNAme but whrong Pass and hit LOG for the third time.
  await page.getByRole("button", { name: "Logar" }).click();
  await page.getByRole("button", { name: "Logar" }).click();
  await page.getByRole("button", { name: "Logar" }).click();

  await expect(page.locator("#statusTemporaryBlock")).toBeVisible();
  await expect(page.locator("#statusTemporaryBlock")).toHaveText(
    "Usuário bloqueado temporariamente!"
  );

  await expect(page.getByText("Usuário bloqueado temporariamente!")).toBeVisible();
  await expect(page.getByText("Usuário bloqueado temporariamente!")).toHaveText(
    "Usuário bloqueado temporariamente!"
  );
});

test("Login - User Blocked", async ({ page }) => {
  await page.goto("login");
  await page.getByPlaceholder("Digite seu usuário").fill("testeblock");
  await page.getByPlaceholder("Digite sua senha").fill("password123");
  // Add wright UserNAme but whrong Pass and hit LOG for the third time.
  await page.getByRole("button", { name: "Logar" }).click();
  await page.getByRole("button", { name: "Logar" }).click();
  await page.getByRole("button", { name: "Logar" }).click();

  await expect(page.locator("#statusBlocked")).toBeVisible();
  await expect(page.locator("#statusBlocked")).toHaveText("Usuário bloqueado!");

  await expect(page.getByText("Usuário bloqueado")).toBeVisible();
  await expect(page.getByText("Usuário bloqueado")).toHaveText("Usuário bloqueado!");
});

test("Login - UnBlock User", async ({ page }) => {
  await page.goto("login");
  await page.getByPlaceholder("Digite seu usuário").fill("testeblock");
  await page.getByPlaceholder("Digite sua senha").fill("password123");
  // Add wright UserNAme but whrong Pass and hit LOG for the third time.
  await page.getByRole("button", { name: "Logar" }).click();
  await page.getByRole("button", { name: "Logar" }).click();
  await page.getByRole("button", { name: "Logar" }).click();

  await expect(page.locator("#statusBlocked")).toBeVisible();
  await expect(page.locator("#statusBlocked")).toHaveText("Usuário bloqueado!");
  await expect(page.getByText("Usuário bloqueado")).toBeVisible();
  await expect(page.getByText("Usuário bloqueado")).toHaveText(
    "Usuário bloqueado!"
  );
  await page.getByPlaceholder("Digite seu usuário").fill("teste");
  await page.getByRole("button", { name: "Logar" }).click();

  await expect(page.getByText("Usuário logado com sucesso!")).toBeVisible();
  await expect(page.getByText("Usuário logado com sucesso!")).toHaveText(
    "Usuário logado com sucesso! Redirecionando..."
  );
  await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();

  await expect(page.getByText("Usuário teste logado")).toBeVisible();
  await expect(page.getByText("Usuário teste logado")).toHaveText(
    "Usuário teste logado"
  );
  await page.getByRole("button", { name: "Logout" }).click();
  await expect(page.getByText("Você foi desconectado. Por")).toBeVisible();
  await expect(page.getByText("Você foi desconectado. Por")).toHaveText(
    "Você foi desconectado. Por favor, faça login."
  );
});
