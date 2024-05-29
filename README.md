# Medium Article APIs

[![npm version](https://badge.fury.io/js/my-typescript-package.svg)](https://badge.fury.io/js/my-typescript-package) [![created by](https://img.shields.io/badge/created%20by-M.%20Usman%20&%20Misbah%20A.-blue.svg?longCache=true&style=flat-square)](https://github.com/muhammad-usman-108) [![star](https://img.shields.io/github/stars/muhammad-usman-108/medium-article-api.svg?style=flat-square)](https://github.com/muhammad-usman-108/medium-article-api/stargazers) ![size](https://img.shields.io/github/size/warengonzaga/buymeacoffee.js/dist/main.js?color=green&style=flat-square) ![npm downloads](https://img.shields.io/npm/d18m/medium-article-api.svg?color=red&style=flat-square) [![license](https://img.shields.io/github/license/muhammad-usman-108/medium-article-api.svg?style=flat-square)](https://github.com/muhammad-usman-108/medium-article-api.js/blob/main/LICENSE)


A npm package designed to fetch user details and articles from Medium. This package provides a simple and efficient way to easily integrate Medium content into their applications.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install this package using npm or yarn.

### npm

```npm i medium-article-api```

### yarn

```yarn add medium-article-api```

## Usage

Here is a simple example to get you started:

```typescript

import { MediumArticles } from 'medium-article-api';

const mediumArticles = MediumArticles();
const username = '<your-medium-username>';

mediumArticles.getProfileUrl(username).then( (result) => console.log('The profile url is ', result)); 
// https://medium.com/feed/@engrmuhammadusman108}

```

### Functions

| Function | Arguments | Output |
|---------|---------| ---------|
| getData| _username_: string | string | 
| getProfileUrl| _username_: string| string |
| getProfileTitle| _username_: string| string |
| getProfileAuthor| _username_: string| string |
| getProfileDescription| _username_: string| string |
| getProfileImageUrl| _username_: string| string |
| getLatestArticleTitle| _username_: string| array[string]|
| getLatestArticlePublicationDate| _username_: string| string |
| getLatestArticleUrl| _username_: string| string |
| getLatestArticleDescription| _username_: string| html |
| getLatestArticle| _username_: string| object |
| getLatestArticlesTitle| _username_: string| string |

## Scripts

### Build

To compile the TypeScript files to JavaScript, run:

```npm run build```

### Test

To run tests, use:

```npm run test```

## Configuration

### TypeScript Configuration

This package uses a `tsconfig.json` file for TypeScript configuration. Here is an example:

```
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
}
```

## Contributing

- [Misbah Afzal](https://github.com/misbahafzal)
- [Muhammad Usman](https://github.com/muhammad-usman-108)

## Support

<p><a href="https://buymeacoffee.com/engrmuhammk"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="engrmuhammk" /></a></p><br><br> 

## LICENSE

This project is licensed under the MIT License - see the [LICENSE](https://github.com/muhammad-usman-108/medium-article-api/blob/main/LICENSE) file for details.
