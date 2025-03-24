import { test, expect } from '@playwright/test';
import { TablePage } from '../pages/tablePage';

test('Validar Table', async ({ page }) => {
  const Table = new TablePage(page);
  await Table.goToTable();

  await Table.validateTableInstructions();
  await Table.validateColunHeaderText();

  await page.getByRole('img', { name: 'Draco Malfoy' }).click();
  await page.locator('#tableCharacterNameDracoMalfoy').click();
  await page.locator('#tableCharacterHouseDracoMalfoy').click();

  await page.getByRole('cell', { name: '-06-1980' }).click();
  await page.getByRole('cell', { name: 'Tom Felton' }).click();
});

test('Validar Table Dinâmica', async ({ page }) => {
  const Table = new TablePage(page);

  // # Sintaxe para criar Constante response e atribuir a ela a Response to Get
  const response = await page.request.get(
    'https://hp-api.onrender.com/api/characters'
  );
  const characters = await response.json();
  // # Sintaxe para criar Constante characters e atribuir a ela a const response E com Json

  await Table.goToTable();

  await Table.validateTableInstructions();
  await Table.validateColumnHeaderText2('Name');

  await Table.validateProfileImage(characters[5].name);
  await Table.validateProfileName(characters[5].name);

  await Table.validateProfileHouse(characters[5].name, characters[5].house);

  await Table.validateProfileDateOfBirth(
    characters[5].name,
    characters[5].dateOfBirth
  );
  console.log(characters[5].dateOfBirth);

  await Table.validateActor(characters[5].name, characters[5].actor);
  console.log(characters[5].name, '=', characters[5].actor);
});
