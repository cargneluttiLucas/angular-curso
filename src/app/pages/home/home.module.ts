import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { CommonModule } from '@angular/common';
import { ContactsListModule } from '../../features/contacts-list/contacts-list.module';


@NgModule({
    imports: [
        CommonModule,
        ContactsListModule,
        HomeRoutingModule
    ],
    declarations: [HomeComponent],
    entryComponents: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule { }
