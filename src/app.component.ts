import { Component } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/interval'

// Updated to Angular 2 final @NgModule features
// For more infor on modules, check out:
// https://egghead.io/lessons/angular-2-create-application-specific-angular-2-components)

@Component({
    selector: 'app',
    template: `
        <h1>{{clock | async}}</h1>
        `
})
export class App {
   clock = Observable
        .interval(1000)
}