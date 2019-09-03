## MateriaBrasil - Web

[![Maintainability](https://api.codeclimate.com/v1/badges/6312890487abe2174b1e/maintainability)](https://codeclimate.com/repos/5b080c0f5a0ae6027d0053a3/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/6312890487abe2174b1e/test_coverage)](https://codeclimate.com/repos/5b080c0f5a0ae6027d0053a3/test_coverage)

## Installation

#### Dependencies

[yarn](https://yarnpkg.com/pt-BR/)

#### Clone the repository
```
$ git clone git@github.com:MateriaBrasil/materiabrasil-web.git
$ cd materiabrasil-web
```

#### Install dependencies
```
$ yarn
```

#### Set the env vars
```
$ cp .env.sample .env
```
Ask a colleague for the values.

#### Run the server
```
$ yarn start
```

You can check that it worked by browsing `localhost:3000`.

## Tests

#### Running tests
```
$ yarn test
```

#### Running tests with coverage report
```
$ yarn test --coverage
```

The coverage will be available on the `coverage/` folder. Open `coverage/lcov-report/index.html` on your browser to see details.


#### Running the linter
```
$ yarn lint
```

## Deployment

#### Staging

Merging to the `master` branch will  automatically deploy to Netlify.

#### Production

A manual deploy must be triggered on `materiamundi` Netlify after merging to the `master` branch.
