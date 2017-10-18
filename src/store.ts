import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { clock } from './reducers'

@NgModule({
    imports: [StoreModule.forRoot({ clock})]
})
export class AppStoreModule {
}