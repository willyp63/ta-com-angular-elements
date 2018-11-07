# TaComAngularElements

Angular custom elements for transamerica.com

This project serves 2 purposes:
 - Build & distribute code to register the custom elements
 - Generate & serve a component catalog for our BE/QA engineers to consume

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

While developing a component, place the component's demo HTML in `src/index.html` (this file should be left empty on all persistent branches).

## Catalog

Run `npm run catalog` to serve the BE/QA catalog.

Run `npm run dev-catalog` to serve the full catalog.

Both commands will first build the project.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Code scaffolding

`TODO: update once we start using scaffolding`

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

`TODO: update once we start unit testing`

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

`TODO: update once we start e2e testing`

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

