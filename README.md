# # Projeto typescript-jest-test

O objetivo deste projeto é a padronização para os testes de unidade

## Arquitetura do Projeto
```
typescript-jest-test
├── src
│   ├── classes
│   │   ├── interfaces
│   │   │   ├── interfaces-protocol/mocks.ts
│   │   ├── classes.ts
│   ├── sevices
│   │   ├── serviços.ts
├── test
│   ├── test-services
│   │   └── test-servives.spec.ts
│   │   │
│   └── test.spec.ts
├── editorconfig
├── .eslint.js
├── .gitignore
├── .prettierrc.js
├── jest.config.js
├── package-lock.json
├── Package.json
├── README.md
└── tsconfig.json
```
## O que preciso fazer antes de rodar o primeiro teste?

Antes de rodar o primeiro teste dev certificar que temos todas as ferramentas e suas versões instaladas e configuradas corretamente.

### Ferramentas
- [Node.js 16+](https://nodejs.org/en)
- [Typescript](https://www.typescriptlang.org/download)
- [Jest](https://jestjs.io/pt-BR/docs/getting-started)

## Instalar
Para instalar as dependências do projeto, navegue até a pasta do projeto e execute o seguinte comando no terminal:

- npm install

## Como executar os codigos escritos

Para executar os codigos utilize o comando a baixo

exemplo:
- npx ts-node --files --transpile-only "/Users/jhony.silva/Documents/typescript-jest-test/src/test/test-services/messaging.spec.ts"

Mais antes certifique que sua pasta .vscode esteja configurado desta maneira (npx ts-node --files --transpile-only)

## Como configurar .vscode

Basta abrir a pasta e em "typescript":

coloque desta forma "npx ts-node --files --transpile-only"
