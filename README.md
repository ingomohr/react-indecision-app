# react-indecision-app

udemy course impl

See https://www.udemy.com/react-2nd-edition/

#### Build:

Start in terminal:

```
yarn run build
```

This will run webpack to build the app and create a `bundle.js` which is to be served.
The bundle.js is not used by webpack dev server right now. The dev server uses a virtual bundle.js.

#### Build & Start dev-server on served public folder:

```
yarn run dev-server
```

This builds the app and accesses a virtual bundle.js (to increase performance).

#### Regenerating node_modules folder

- Delete the folder
- In terminal run

```
yarn install
```
