import { Component } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/map'
import { Subject } from 'rxjs/Subject'

// Updated to Angular 2 final @NgModule features
// For more infor on modules, check out:
// https://egghead.io/lessons/angular-2-create-application-specific-angular-2-components)

@Component({
    selector: 'app',
    template: `
        <h1>{{clock | async | date:'medium'}}</h1>
        `
})
export class App {
   clock = Observable
        .interval(1000)
        .map(()=> new Date());
}