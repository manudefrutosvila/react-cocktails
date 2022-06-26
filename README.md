# react-cocktails

This is a project whose purpose is to practice React and Typescript.

This app consumes [TheCocktailDB](https://www.thecocktaildb.com/api.php) API, just for searching cocktails.

- [Project setup](#project-setup)
- [Project distribution](#project-distribution)

## Project setup

### React + Typescript + Vite

This project is started with create-vite using the scaffolding for react-ts template, which helps to get started developing with React and Typescript in Vite.

It also has Tailwindcss for rapidly build styles. 

Besides it has configured linting tools such ESLint, Prettier, Husky, Commitlint and lint staged.

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)

### Node version

- [lts/gallium, v16](https://nodejs.org/es/about/releases/):
  - _active lts start:_ `2021-10-26`
  - _maintenance lts start:_ `2022-10-18`
  - _end of life:_ `2024-04-30`

Manage node version with [nvm](https://github.com/nvm-sh/nvm)

```
nvm use
```

or first install the node version

```
nvm install lts/gallium
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Lints and fixes files

```
npm run lint
npm run lint:fix
```

## Project distribution

For compile a distribution of the project we simply need to lauch tsc and vite build and it will do all the magic (optimization, minify, chunk files...)

```
npm run build
```
