import { test, expect } from '@playwright/test';
test('Teste Login', async ({ page }) => {
    await page.goto('http://....');  // Aguarda a pagina ser carregada
    await expect(
        page.getByTestId('modal').getByRole('heading')
    ).toHaveText('Click aqui para entrar'); //Clica em entrar
    await page.locator('#name').fill('Nome do usuário'); // Localiza o elemento ‘Nome do usuário
    await page.getByPlaceholder('Seu email').fill('usuario@email.com'); //Clica no elemento ‘Email’
    await page.getByPlaceholder('Sua senha').fill('Senha123'); //Clica no elemento ‘Senha’
    await page.getByTestId('modal')
        .getByText('Entrar!').click(); //Clica em entrar
    await expect(page).toHaveURL(/.*pagina-inicial/);  // Verifica se a URL foi alterada para a página inicial
});