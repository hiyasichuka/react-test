# README

## Run Unit Tests

Use the React Testing Library to run unit tests with code coverage.

- <https://testing-library.com/docs/react-testing-library/intro/>

```sh
npm run test -- --coverage --collectCoverageFrom src/components/**/*.tsx --coverageDirectory report/coverage
```

## Run E2E Tests

First, start the React App as usual.

```sh
npm start
```

Then use Playwright to run the test script in headless mode.

```sh
npm run e2e:react
```

You can run the test script in a step-by-step mode by using the following command.

- <https://playwright.dev/docs/debug#run-in-debug-mode>

```sh
PWDEBUG=1 npm run e2e:react --headed
```

Finally, show the test report.

```sh
npm run e2e:show-report
```

## Update Snapshots

If you are using the Visual Comparisons feature, you need to create or update snapshots 'golden files' when you run the first test,

- <https://playwright.dev/docs/test-snapshots>

```sh
npm run e2e:react --update-snapshots
```

## Generate Test Scripts

Record the manual operation to `bing.com` and save the recorded result as test script file. For example, save the result as `test/bing.e2e.spec.ts`.

```sh
npx playwright codegen https://google.com
```

Then run the recorded test script for the regression test.

```sh
npm run e2e:bing
```

```sh
PWDEBUG=1 npm run e2e:bing --headed
```

## Settings

The settings are described in the `playwright.config.ts`.

For more details, please refer to the official document.

- <https://playwright.dev/docs/test-configuration>
