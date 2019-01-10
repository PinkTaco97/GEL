# GEL [![CircleCI](https://circleci.com/gh/WestpacGEL/GEL/tree/master.svg?style=svg)](https://circleci.com/gh/WestpacGEL/GEL/tree/master)

The design system for Westpac GEL

## npm scripts

### root level

| script                      | description                                    |
| --------------------------- | ---------------------------------------------- |
| `bolt`                      | install all dependencies                       |
| `bolt nuke`                 | removes all `node_modules` for fresh start     |
| `bolt fresh`                | removes all `node_modules` and reinstalls them |
| `bolt dev [package-name]`   | run the examples of the specified component    |
| `bolt new [package-name]`   | create a specified empty component             |
| `bolt start [package-name]` | start the example server of a component        |
| `bolt test`                 | runs test                                      |
| `bolt format`               | runs prettier to format all code               |

### component level

| script          | description                      |
| --------------- | -------------------------------- |
| `bolt start`    | start the example server         |
| `bolt test`     | runs test headless               |
| `bolt test:dev` | runs test by opening cypress app |

## Monorepo

```sh
.
├── LICENSE
├── README.md
├── package.json
├── yarn.lock
│
├── helper/
│   ├── example/
│   │   ├── index.js          # example wrapper for `bolt dev`
│   │   └── webpack.config.js # dynamic webpack config to run the `bolt dev` task
│   └── cli.js                # helper file for cli like adding a new module
│
├── components/               # all ds components that will be published
│   ├── component1/
│   ├── component2/
│   └── component3/
│
├── brands/
│   ├── WBC/
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── index.js          # only for exports
│   │   ├── svg/              # and with like svgs
│   │   ├── data/             # like design tokens
│   │   └── fonts/            # or font files
│   ├── STG/
│   │   └── etc
│   └── BOM/
│       └── etc
│
├── examples/                 # complex examples like templates
│   ├── demo1/                # for testing multiple components
│   │   └── tests/            # each have test folders
│   ├── demo2/
│   └── demo3/
│
└── docs/                     # everything related to the documentation site
    ├── page1.mdx
    ├── page2.mdx
    └── page3.mdx
```

## Component

```sh
.
├── README.md
├── LICENSE
├── package.json            # scope: `@westpac/`
│
├── src/                    # all the source
│   ├── index.js            # only for exports
│   ├── ComponentX.js       # only for the components, can be multiple files
│   ├── styled.js           # only for styles [optional]
│   ├── vanilla.js          # only for static site generation
│   └── _util.js            # for reused logic within the component [optional]
│
├── docs/                   # documentation for docz later
│   ├── thing1.mdx          # documenting features etc
│   └── thing2.mdx
│
├── examples/               # the demo folder is for seeing the components in action
│   ├── 00-example.js       # show-case props and variations
│   ├── 10-example.js       # all files not starting with a dot or an underscore
│   ├── 20-example.js       # will be processes with `bolt dev`
│   └── _util.js            # for reused logic within the examples [optional]
│
└── tests/                  # test includes all tests
    ├── unit/
    │   └── unit.spec.js    # jest test file for unit tests
    └── integration/
        └── test.cypress.js # cypress test file for integration tests
```

## Decisions

- All scripts are run through the `bolt` command
- The helper file will include all helpers for builds
- We have two different example / doc concerns:
  1. Examples: they are for building components locally and to explain code
  1. Docs: this is a website that will be published for documenting APIs
- Multi-brand will be achieved by added a brand package that will be dynamically imported inside `core`
- Tokens and everything regarding branding will be contained in the brand packages in `brands/*`
- To select a brand the consumer has to import the `@westpac/[brand]` package and pass it to core

  ```jsx
  import { brand } from '@westpac/wbc';
  import { GEL } from '@westpac/core';

  export const Thing = (
  	<GEL brand={brand} theme={provided => ({ ...provided, colors: {} })}>
  		Your app
  	</GEL>
  );
  ```

### Naming convention

| name            | purpose                                                                     |
| --------------- | --------------------------------------------------------------------------- |
| `index.js`      | Export only public API                                                      |
| `styled.js`     | Only for styled components `[optional]`                                     |
| `_util.js`      | For code shared between components (ignored in examples) `[optional]`       |
| `ComponentX.js` | All component files are named after the exported component and pascal cased |
| `00-*.js`       | All files inside the `examples/` folder are sorted by file name             |
| `*.js`          | All jsx files are postfixed with `.js`                                      |
| `*.spec.js`     | All (jest) unit tests are postfixed with `.spec.js`                         |

## TODO

- [x] jest tests setup for each component
- [/] cypress test setup for each component
- [x] add circleCI
- [x] write more docs around each decision me made
- [x] connect brand/wbc packages to core component
- [x] fix up other components to new folder structure
- [ ] move to `peerDependencies`
- [ ] remove emotion from dependencies from all other components
- [ ] move `@westpac/core` to `peerDependencies`
