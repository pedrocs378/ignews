<h1 align="center">
  <img alt="ig.news" title="ig.news" src=".github/logo.png" />
</h1>


## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:
- [React](https://reactjs.org/)
- [Next](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/)

### Serviço de pagamento

- [Stripe](https://stripe.com/)

### Banco de dados

- [FaunaDB](https://fauna.com/)

### CMS

- [Prismic](https://prismic.io/)

## :computer: Projeto
Ignews é uma aplicação para leitura de noticias recentes sobre tecnologias, onde para o usuário consumir o conteúdo completo, é necessário realizar uma assinatura mensal. Caso contrário, apenas uma página para review é exibida.

## :bookmark: Layout
O layout deste projeto pode ser acessado através [desse link](https://www.figma.com/file/gl0fHkQgvaUfXNjuwGtDDs/ig.news?node-id=1%3A2). É necessário ter conta no [Figma](http://figma.com/) para acessá-lo.

## :clapper: Execução
Para a executar este projeto é necessário ter uma conta nos seguintes serviços:

- [Stripe](https://stripe.com/)
- [Github](https://github.com/)
- [FaunaDB](https://fauna.com/)
- [Prismic](https://prismic.io/)

Após criar uma conta, é necessário adicionar obter as chaves dos respectivos serviços, criar um arquivo `.env.local`, e preencher as variaveis que estão como exemplo no arquivo `.env.local.example`. <br />
Deve também conferir nomes de indexes, collections, entre outros aspectos, citados principalmente nos arquivos dentro de `./src/pages/api` e criar os mesmos em seus devidos serviços. <br />
Caso finalizado, basta seguir as seguinte instruções:

- Clone o repositório.
- Instale as bibliotecas utilizando `npm install` ou qualquer outro gerenciador de pacotes.
- Execute utilizando `npm run dev`.
