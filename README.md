# Site

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3


# Architecture

src
├── app                               - Your application
│   ├── blocks                        - Common building blocks like configuration and interceptors
│   ├── pages                         - Pages of application
│   ├── layouts                       - Common page layouts like navigation bar and error pages
│   ├── shared                        - Common services like authentication, components and modules
│   ├── app-routingmodule.ts          - Main application router
│   ├── app.component.html            - Main application page
│   ├── app.component.scss            - Main application style
│   ├── app.component.spec.ts         - Main application test
│   ├── app.component.ts              - Main application component
│   ├── app.module.ts                 - Application modules configuration
├── assets                            - Static assets
│   ├── img                           - Images
│   ├── style                         - Stylesheets (Sass style sheet files will be here)
├── i18n                              - Translation files
├── swagger-ui                        - Swagger UI front-end
├── favicon.ico                       - Fav icon
├── index.html                        - Index page
|── ...

# Commands

## Build on GithubPages

ng build --prod --output-path docs --base-href site
