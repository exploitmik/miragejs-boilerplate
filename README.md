# MirageJS Boilerplate

MirageJS é uma maravilhosa ferramenta para criar mocks de APIS no front-end enquanto a API real está sendo desenvolvida. Como o próprio diz: "Desenvolva suas funcionalidades front-end por completo, mesmo se sua API ainda não existir."

## Estrutura de pastas

É recomendado que esta pasta seja utilizada dentro do projeto na qual há a necessidade do mock. Sendo assim, a arquitetura de pastas foi dividida em:

- `fixtures`: dados que serão consumidos ao acessar os endpoints;
- `models`: modelo para acesso através de schema e db;
- `routes`: rotas que simularão os endpoints para consumo dos recursos.

## Dependências

- MirageJS
- TypeScript
- Faker (opcional)

## Como usar

Sendo qualquer aplicação, use a função `makeServer` para iniciar o servidor.

```js
import { makeServer } from '../miragejs-boilerplate';

makeServer();
```

Há a possibilidade de passar parâmetros para `makeServer`:

```js
makeServer({
  timing: 300,
  environment: process.env.NODE_ENV,
});
```
