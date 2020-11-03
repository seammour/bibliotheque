# Bibliotheque

```SH 
ng g c auth/signup
ng g c auth/signin
ng g c book-list
ng g c book-list/single-book
ng g c book-list/book-form
ng g c header
ng g s services/auth
ng g s services/books
ng g s services/auth-guard
npm install bootstrap --save
### reste à faire
npm install --save bootstrap@3.3.7
dans angular.json
architect#styles
"styles": [
"./node_modules/bootstrap/dist/css/bootstrap.css",
...
]
npm install --save rxjs-compat  
```
### Installation la bibliotheque firebase
npm install firebase --save

### Configurer le storage 
-- Aller dans le menu storage
-- cliquer sur commencer
-- puis choisir la region pour stocker les données (fichiers)






### 1- Create repo bibliotheque
### 2- git add .
### 3- git commit -m "initialize projet"
### 4- git remote add origin https://github.com/seammour/bibliotheque.git
### 5- git push -u origin master


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.


## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### ##############################
###  Git - Creation Tag
### ##############################
## git tag -a v1.0.0 -m "Reactive Formulaire"
## git tag
## git push origin v1.0.0