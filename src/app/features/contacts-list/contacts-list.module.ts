import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Component
import { ContactComponent } from './components/contact/contact.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactsListComponent } from './container/contacts-list.component';
import { PipesModule } from '../../shared/pipes/pipe.module';
import { DirectivesModule } from '../../shared/directives/directives.module';

@NgModule({
    imports: [
        CommonModule,
        PipesModule,
        DirectivesModule
    ],
    declarations: [
        ContactsListComponent,
        ContactComponent,
        ContactDetailComponent
    ],
    exports: [
        ContactsListComponent,
        ContactComponent,
        ContactDetailComponent
    ],
    providers: []
})
export class ContactsListModule {}
