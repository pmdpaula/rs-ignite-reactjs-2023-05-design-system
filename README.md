# Curso da Rocketseat de Design System

Ignite 2023 - ReactJS - Projeto 05

[Github repositório](https://github.com/rocketseat-education/05-design-system)

## Tecnologias

## Componentes do Design System

[Projeto Figma](https://www.figma.com/community/file/1161274296921389678)

- Text
- Heading
- Box
- Button
- TextInput
- TextArea
- Checkbox
- Avatar
- MultiStep

## Pacotes

- [Turbo](https://turbo.build/repo/docs/installing)
  Pacote para executar e administrar todos os pacotes pela raiz

```bash
npm i -D turbo@latest
```




- [Versionamento do monorepo  - Changesets](https://github.com/changesets/changesets/blob/main/packages/cli)
```bash
npm i -D @changesets/cli
```



### tokens

Pacote com as definições base de todas as aplicações (cores, fontes...)

Criando o pacote

```bash
npm init
```

#### Instalações

- [Typescript]

```bash
npm i -D typescript
tsc --init # para criar o arquivo tsconfig
```

- [TSUP](https://github.com/egoist/tsup)

```bash
npm i -D tsup
```

### ts-config

Pacote com as definições base do typescript

Criando o pacote

```bash
npm init
```

#### Instalações

- [Typescript]

```bash
npm i -D typescript
tsc --init # para criar o arquivo tsconfig
```

- [TSUP](https://github.com/egoist/tsup)

```bash
npm i -D tsup
```

### eslint-config

Pacote com as definições base do typescript

Criando o pacote

```bash
npm init
```

#### Instalações

- [Eslint]

```bash
npm i -D eslint
npx eslint --init
```

Outros pacotes serão instalados de acordo com a resposta dada no questionário de inicialização do eslint.




### react

Pacote com a aplicação em React

Criando o pacote

```bash
npm init
```

#### Instalações

- [Typescript]

```bash
npm i -D typescript
tsc --init # para criar o arquivo tsconfig
```

- [TSUP](https://github.com/egoist/tsup)

```bash
npm i -D tsup
```

- [React](https://react.dev/learn/start-a-new-react-project)

```bash
npm i -D react @types/react @types/react-dom
```

- [Stitches](https://stitches.dev/docs/installation)

```bash
npm i @stitches/react
```


- [Avatar do Radix](https://www.radix-ui.com/docs/primitives/components/avatar)

```bash
npm install @radix-ui/react-avatar
```



- [Checkbox do Radix](https://www.radix-ui.com/docs/primitives/components/checkbox)

```bash
npm install @radix-ui/react-checkbox
```



- [Ícones - phosphor](https://github.com/phosphor-icons/react)

```bash
npm i phosphor-react
```



- [Tooltip do Radix](https://www.radix-ui.com/primitives/docs/components/tooltip)

```bash
npm install @radix-ui/react-tooltip
```



- [Toast do Radix](https://www.radix-ui.com/primitives/docs/components/toast)

```bash
npm install @radix-ui/react-toast
```



### docs

Pacote da documentação do projeto. Onde está localizado o Storybook

```bash
npx sb init --builder @storybook/builder-vite --type react --package-manager=npm
```

- [Plugin Vite]

```bash
npm i -D vite @vitejs/plugin-react
```

- [React]

```bash
npm i react react-dom
```

~~- [Tema escuro no Storybook](https://storybook.js.org/addons/storybook-dark-mode)~~

```bash
#npm i storybook-dark-mode
```

~~Atualmente este addon não seria necessário, mas está com bug ao aplicar o tema escuro nos docs (mdx).~~

!!! Bug !!!
O tema escuro

```bash
#npx sb@latest upgrade
```

~~- [eslint-plugin-storybook]~~

```bash
#npm i -D eslint-plugin-storybook
```

Foi indicado no stackoverflow o upgrade do sb. Não resolveu e um pequeno ajuste no arquivo `preview.js`
Eu havia posto o parametros `docs` fora dos `parameters`. Ajustei e funcionou.

- [polished](https://www.npmjs.com/package/polished)

```bash
npm i polished
```



- [Ícones - phosphor](https://github.com/phosphor-icons/react)

```bash
npm i phosphor-react
```



- [Verificação de assecibilidade no Storybook](https://storybook.js.org/addons/@storybook/addon-a11y)

```bash
npm install -D @storybook/addon-a11y@7.1.0
```

Adicionar o addon no arquivo `packages/docs/.storybook/main.js`




- [Deploy do storybook](https://github.com/storybook-eol/storybook-deployer)

```bash
npm i -D @storybook/storybook-deployer
```




- [Hook do Storybook](https://www.npmjs.com/package/@storybook/client-api)

```bash
npm i -D @storybook/client-api
```
