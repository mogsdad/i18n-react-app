## Localization: i18n + Markdown

In this project, the basic React app created via the [Create React App](https://github.com/facebook/create-react-app) has been modified for out-of-the-box localization support.

Key changes to support this included:
* Installation of packages for i18next (`i18next` and `react-i18next`), to load translations over http (`i18next-http-backend`), and to detect the locale set in the browser (`i18next-browser-languagedetector`).

  The initialization and config of i18next is encapsulated into `/i18n.js`.
  That gets `import`ed by `App.js` from within a `<Suspense>` component to ensure initialization is completed before the App proceeds.

  Start with the [react-i18next documentation](https://react.i18next.com/) for additional details.

* Installation of [`react-markdown`](https://github.com/rexxars/react-markdown), to provide a simple and elegant way to embed style info in translation strings.
  (The [`react-remarkable`](https://github.com/acdlite/react-remarkable) package was also considered for this purpose, but it is not being actively supported.)

  It is feasible to embed HTML tags into translation strings, but an additional operation is then required to parse the strings and extract the tags to react nodes.
  That approach would increase code complexity.

### Translation files

All translations are hosted in the `/public/locales` folder.
Each supported language has its own folder named according to the [ISO 639-1 code](https://en.wikipedia.org/wiki/ISO_639-1) for the bare language.
(Bare language locale support is controlled by the `"languageOnly"` value for `i18nOptions.load`.)

Strings that are the same in all languages use the `"common"` i18next namespace.
You'll notice that only the English version of this file is populated with actual strings, which allows fallback behavior to provide content in other languages.

Strings that are to be translated appear in the `"translation"` i18next namespace, so the `translation.json` file is required in each supported language.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
