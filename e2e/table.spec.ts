import { test } from '@playwright/test';
import { TablePage } from '../pages/tablePage';

let characters: any[] = [];

test.describe('Validate charaters', () => {
  test.beforeAll(async ({ request }) => {
    const response = await request.get(
      'https://hp-api.onrender.com/api/characters'
    );
    characters = await response.json();
  });

  for (let i = 0; i < 10; i++) {
    test('Validar Table Dinâmica ' + (i + 1), async ({ page }) => {
      const Table = new TablePage(page);

      await Table.goToTable();
      await Table.validateTableInstructions();
      await Table.validateColumnHeaderText2('Name');
      await Table.validateProfileImage(characters[i].name);
      await Table.validateProfileName(characters[i].name);
      await Table.validateProfileHouse(characters[i].name, characters[i].house);
      await Table.validateProfileDateOfBirth(
        characters[i].name,
        characters[i].dateOfBirth
      );
      await Table.validateActor(characters[i].name, characters[i].actor);
    });
  }
});
