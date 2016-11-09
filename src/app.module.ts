import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { App } from './app.component'
import { AppStoreModule } from './store'


@NgModule({
    imports: [BrowserModule, AppStoreModule],
    declarations: [App],
    bootstrap: [App]
})
export class AppModule {

}