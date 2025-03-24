import { expect, Page } from '@playwright/test';

export class TablePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToTable() {
    await this.page.goto('table');
  }

  async validateTableInstructions() {
    await expect(
      this.page.getByText('Veja a tabela de personagens')
    ).toBeVisible();
    await expect(
      this.page.getByText('Veja a tabela de personagens')
    ).toHaveText('Veja a tabela de personagens do Harry Potter abaixo.');
    await expect(
      this.page.getByText('A ordem dos personagens muda')
    ).toBeVisible();
    await expect(
      this.page.getByText('A ordem dos personagens muda')
    ).toHaveText('A ordem dos personagens muda a cada carregamento da página.');
    await expect(
      this.page.getByText('São exibidas imagem, nome,')
    ).toBeVisible();
    await expect(this.page.getByText('São exibidas imagem, nome,')).toHaveText(
      'São exibidas imagem, nome, casa, data de nascimento e ator.'
    );
  }

  async validateColunHeaderText() {
    await expect(this.page.getByRole('cell', { name: 'Image' })).toHaveText(
      'Image'
    );
    await expect(this.page.getByRole('cell', { name: 'Name' })).toHaveText(
      'Name'
    );
    await expect(this.page.getByRole('cell', { name: 'House' })).toHaveText(
      'House'
    );
    await expect(
      this.page.getByRole('cell', { name: 'Date of Birth' })
    ).toHaveText('Date of Birth');
    await expect(this.page.getByRole('cell', { name: 'Actor' })).toHaveText(
      'Actor'
    );
  }
  async validateColumnHeaderText2(name: string) {
    await expect(this.page.getByRole('cell', { name: name })).toHaveText(name);
  }

  // ### VIA API ### //
  async validateProfileImage(characterName: string) {
    await expect(
      this.page.getByRole('img', { name: characterName })
    ).toBeVisible();
  }

  async validateProfileName(characterName: string) {
    // Contem nome do personagem, sem tratamento
    // console.log(characterName);

    // tratando o nome do personagem, atribuindo a nova variavél, sem espaço.
    const characterNameWithOutSpace = characterName.replace(' ', '');
    // console.log(characterNameWithOutSpace);

    await expect(
      this.page.locator('#tableCharacterName' + characterNameWithOutSpace)
    ).toBeVisible();

    await expect(
      this.page.locator('#tableCharacterName' + characterNameWithOutSpace)
    ).toHaveText(characterName);
  }

  async validateProfileHouse(characterName: string, characterHouse: string) {
    const characterNameWithOutSpace = characterName.replace(' ', '');

    await expect(
      this.page.locator('#tableCharacterHouse' + characterNameWithOutSpace)
    ).toBeVisible();

    await expect(
      this.page.locator('#tableCharacterHouse' + characterNameWithOutSpace)
    ).toHaveText(characterHouse);
  }

  // mapear restante dos campos, de forma dinamica, "date-of-bir" / actor".

  async validateProfileDateOfBirth(
    characterName: string,
    characterDateOfBirth: string
  ) {
    const characterNameWithOutSpace = characterName.replace(' ', '');

    await expect(
      this.page.locator(
        '#tableCharacterDateOfBirth' + characterNameWithOutSpace
      )
    ).toBeVisible();

    await expect(
      this.page.locator(
        '#tableCharacterDateOfBirth' + characterNameWithOutSpace
      )
    ).toHaveText(characterDateOfBirth);
  }

  async validateActor(characterName: string, characterActor: string) {
    const characterNameWithOutSpace = characterName.replace(' ', '');

    await expect(
      this.page.locator('#tableCharacterActor' + characterNameWithOutSpace)
    ).toBeVisible();
    await expect(
      this.page.locator('#tableCharacterActor' + characterNameWithOutSpace)
    ).toHaveText(characterActor);
  }
}
