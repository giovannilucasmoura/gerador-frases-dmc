import { render, screen } from '@testing-library/react';
import App from './App';

test('Teste de renderização básica do app', () => {
    render(<App />);

    const botao = screen.getByRole('button');
    const imagem = screen.getByRole('img');
    const texto = screen.getByText(/Texto/);

    expect(botao).toBeInTheDocument();
    expect(imagem).toBeInTheDocument();
    expect(texto).toBeInTheDocument();
});
