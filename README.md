# introduction

MAIN CONCEPT

- INSTALL AND SETUP THE ANGULAR APP
- STRUCTURE
- COMPONENT `
- MODULE
- EVENT
- BINDING
- API
- ROUTING
- FORMS

# Install Command line for Angular

```sh
npm install -g @angular/cli
or
npm install -g @angular/cli@next
```

after this

- ```sh
  ng version
  ```

Create New Web Application

- ```sh
  ng new Project_Name
  ```

# Angular Interpolation

in html file if we want data from ts file simply use that variable in double curly brackets.

```sh
{{title}}

- this Type of thing is called interpolation
{{ title }}
<p>
  {{ data }}
</p>
<h1>
  {{ name }}
</h1>
```

# Components in Angular

- Creating new component in angular

> **Note:- here g means generate**

```sh
ng g c component_name
```

and to call any component copy name that will be displayed in component_name.components.ts file in which you can see selector that will be your component name and that component name is used for calling any component in any file

- for creating any component in any other folder you can use

```sh
ng g c folder_name/component_name
```

```javascript
<app-component_name></app-component_name>
```

# Modules in Angular

here we can create modules like components
ng g m module_name

- How To Call Module

in module we have to create component in that folder then after we can call that module in export and the module_name.modules.ts will be like

```javascript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// * Components
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule],
  exports: [LoginComponent],
})
export class UsersModule {}
```

**File:- app.modules.ts**

```javascript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// Component
import { UserListComponent } from "./user-list/user-list.component";
// Modules
import { UsersModule } from "./users/users.module";
@NgModule({
  declarations: [AppComponent, UserListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // import all other modules here
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

# How to call Function

- Define a function
- the function will be define in component.ts

- Make a button and call function on button click

- pass params with function call

# Important Events

- Important Event In Angular

  - Click Event
  - keyup Event
  - keyup with enter and space Event
  - keydown
  - blur
  - mouseover & mouseleave
  - get values on textbox

# Get Text Box Value

- Get value with value change
- Get value with Button Click

# Property Binding

- we can bind a property with html element

  ### Difference between property binding and interpolation

  - with property binding you set the attribute with the exact value of the property, now with interpolation, you can mix dynamic content from your model within the string,

# Condition in angular

- make if condition
- make if else condition
- make conditions with string
- make elseif condition
- make condition with property PropertyBindingModule

# Switch Case

# For Loop In Angular

- Make a array
- apply for loop with it with html table
- Make a array with object
- apply for loop with it with html table

# Forms in angular

- Make a simple Form in angular
- import form module in module file
- make a form
- make function and get form value

# Header and Footer

# Style And Binding

- Difference between normal style and style binding
- Add dynamic style
- Update Style with button click
- Add Conditional style

# Bootstrap with angular

- Run command for install bootstrap
- ```sh
  ng add @ng-bootstrap/ng-bootstrap
  ```

- Try with some bootstrap examples
- we check and use code from official website of ng-bootstrap

# Angular Material App

- What is Material UI?
- install material
- ```sh
  ng add @angular/material
  ```
- select some when while installing Material
- Use some component with example
- Such as slider and Button

# Pass data parent to child component

- Make Users Component
- Make it child of app component
- pass data to app to child component
- display data in child component

# Angular Reusable component

- Make a user component
- use it inside app component as child
- pass data from parent to child
- use for loop and result child component

# Pass data parent to child component

- make a user component
- use it inside app component or parent component as child
- pass data from child to parent with EventEmitter

# what are pipes

- What is pipe
- pipe with string
- pipe with date
- pipe with slice
- pipe with currency
- examples

# angular routing basics

- make a new angular project
- make 2 component
- add routing in app-routing-module file
- write code in html file for making routing link
- test routing

  > if you did not select routing option on the project make time

  ```sh
  ng generate module app-routing --flat --module-app
  ```

# 404 page in angular

- What is directives?
- example of default directives
- how to make custom directives
- run command

```sh
ng g directive
```

- Use it with html

# Custom Directive

# Angular Service Based

- What is Service in angular?
- How to make Service ?
- How to use Service?
- Example

# Call a simple API

# Api Data list in table

# Model in angular

# Recap Routing And Module

# Routing Module

# Group Routing

# Angular lazy loading

# Lazy Loading Component

# Forms Introduction

# Template Driven Forms

# Add Bootstrap in angular forms

# Angular Reactive Forms

# Template Driven Forms validation

# Pre-filled forms

# what is reactive forms
