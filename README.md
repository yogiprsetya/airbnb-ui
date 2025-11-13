# airbnb-ui

A modern React component library with Airbnb-inspired design, built with TypeScript, Vite, and Tailwind CSS.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Development Instructions

### Prerequisites

Before you start, make sure you have installed:

- [Node.js](https://nodejs.org/) (version 18 or newer)
- npm (comes with Node.js) or yarn

### Installation

First, install all the required dependencies:

```bash
npm install
```

Or if you're using yarn:

```bash
yarn install
```

### Development Server

To start the development server with hot module replacement (HMR):

```bash
npm run dev
```

Or:

```bash
yarn dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is already in use).

### Build

To create a production build:

```bash
npm run build
```

Or:

```bash
yarn build
```

The build output will be saved in the `dist/` folder.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

Or:

```bash
yarn preview
```

### Linting

To check your code for errors and style issues:

```bash
npm run lint
```

Or:

```bash
yarn lint
```

### Storybook

To start Storybook for component development:

```bash
npm run storybook
```

Or:

```bash
yarn storybook
```

Storybook will be available at `http://localhost:6006`.

To build Storybook as a static site:

```bash
npm run build-storybook
```

Or:

```bash
yarn build-storybook
```

## Versioning & Changelog Management

This project uses [Changesets](https://github.com/changesets/changesets) for version management and changelog generation.

### Creating a Changeset

When you make changes that should be included in the next release, create a changeset:

```bash
npm run changeset
```

This will prompt you to:

1. Select the type of change (patch, minor, or major)
2. Write a summary of the changes

The changeset will be saved in the `.changeset` directory.

### Versioning

To update the version and generate the changelog based on all changesets:

```bash
npm run version
```

This will:

- Update the version in `package.json`
- Generate/update `CHANGELOG.md`
- Remove the consumed changesets

### Releasing

To build and publish the package to npm:

```bash
npm run release
```

This will:

- Build the package
- Publish to npm using the changesets publish command

### Workflow

1. Make your changes
2. Run `npm run changeset` to document the changes
3. Commit the changes and changeset files
4. When ready to release, run `npm run version` to bump version and update changelog
5. Run `npm run release` to build and publish

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
