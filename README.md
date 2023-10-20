# Tailwind Classnames

![npm](https://img.shields.io/npm/v/tw-classnames) ![npm](https://img.shields.io/npm/dt/tw-classnames) ![NPM](https://img.shields.io/npm/l/tw-classnames)

`twc` aka tw-classnames is a lightweight utility function that simplifies the process of merging Tailwind Classes while also supporting conditional classes within objects.

## Installation

You can install `twc` via npm or yarn:

```bash
npm install tw-classnames
# OR
yarn add tw-classnames
```


<br />

## Usage
Import twc into your JavaScript or TypeScript code:

```javascript
const twc = require('tw-classnames');
// OR
import twc from 'tw-classnames';
```
<br />

## Merging Duplicate Classnames
twc allows you to smartly merge duplicate Tailwind classes.

````javascript
const mergedClasses = twc('bg-blue', 'text-white', 'p-4', 'bg-green');
console.log(mergedClasses);
// Output: 'text-white p-4 bg-green'
````

<br />

## Conditional Classes
twc supports conditional classes within objects. This is especially useful when you want to apply different classes based on certain conditions.

````javascript
const isActive = true;
const classes = twc('bg-blue-500', 'text-white', { 'font-bold': isActive });
console.log(classes);
// Output: 'bg-blue-500 text-white font-bold'
````

<br />


### Dependency Libraries

`twc` internally uses two popular libraries:
- [clsx](https://www.npmjs.com/package/clsx) for object merging.
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) to merge Tailwind classes intelligently.


## License

`twc` is open-source and released under the [MIT License](LICENSE).
