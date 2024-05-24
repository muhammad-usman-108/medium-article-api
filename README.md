# Medium Article APIs

[![npm version](https://badge.fury.io/js/medium-article-api.svg)](https://badge.fury.io/js/medium-article-api)

NPM package for Medium Articles APIs.

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

const profileURL = await mediumArticles.getProfileUrl(username); // https://medium.com/feed/@engrmuhammadusman108}

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

## LICENSE

This project is licensed under the MIT License - see the [LICENSE](https://github.com/muhammad-usman-108/medium-article-api/blob/main/LICENSE) file for details.
