# Oferta Corinthians - Final da Copa do Brasil

Projeto de oferta interativa celebrando a classificação do Corinthians para a final da Copa do Brasil, com quiz, análise de respostas e página de checkout.

## Estrutura do Projeto

```
corinthians_final/
├── assets/
│   └── images/          # Imagens do Corinthians, ídolos, estádio, etc.
├── quiz/
│   └── index.html       # Redirecionador para /quiz.html
├── loading1/
│   └── index.html       # Redirecionador para /loading1.html
├── loading2/
│   └── index.html       # Redirecionador para /loading2.html
├── parabens/
│   └── index.html       # Redirecionador para /parabens.html
├── taxa/
│   └── index.html       # Redirecionador para /taxa.html
├── start-tela.html      # Página inicial
├── quiz.html            # Quiz com 5 perguntas
├── loading1.html        # Análise de respostas
├── parabens.html        # Página de sucesso
├── loading2.html        # Cadastro e cálculo de frete
├── taxa.html            # Seleção de tamanho e pagamento
└── README.md
```

## Fluxo da Aplicação

1. **Tela Inicial** (`/start-tela.html`)
   - Apresentação da oferta
   - Imagem da camiseta do Corinthians
   - Botão "JOGAR DESAFIO"

2. **Quiz** (`/quiz`)
   - 5 perguntas sobre o Corinthians
   - Imagens relacionadas a cada pergunta
   - Progresso visual

3. **Loading 1** (`/loading1`)
   - Análise de respostas
   - Mensagem de sucesso: "Parabéns! Você acertou 5 das 5 perguntas!"
   - Redirecionamento automático

4. **Parabéns** (`/parabens`)
   - Página de sucesso
   - Modal de cadastro de endereço
   - Redirecionamento para loading2

5. **Loading 2** (`/loading2`)
   - Cadastro de endereço
   - Cálculo de frete
   - Redirecionamento para taxa

6. **Taxa** (`/taxa`)
   - Seleção de tamanho da camiseta
   - Informações de preço
   - Botão de pagamento

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)

## Perguntas do Quiz

1. Quantas vezes o Corinthians ganhou o Mundial de Clubes? (Resposta: 1 vez)
2. Quem é considerado o maior jogador da história do Corinthians? (Resposta: Sócrates)
3. Em que ano o Corinthians ganhou sua primeira Libertadores? (Resposta: 2012)
4. Qual é o estádio do Corinthians? (Resposta: Neo Química Arena)
5. Quem é o mascote do Corinthians? (Resposta: Gavião)

## Imagens Utilizadas

- Logo do Corinthians
- Camiseta do Corinthians
- Ídolos do Corinthians
- Libertadores do Corinthians
- Neo Química Arena
- Mundial de Clubes

## Como Usar

1. Faça o clone do repositório
2. Abra `start-tela.html` no navegador
3. Siga o fluxo da aplicação

## Parceria

Oferta em parceria com **Esportes da Sorte**, celebrando a classificação do Corinthians para a final da Copa do Brasil.

## Autor

Desenvolvido para a campanha de marketing do Corinthians.
