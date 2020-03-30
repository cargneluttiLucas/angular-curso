import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(private contactService: ContactsService) { }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe( contacts => this.contacts = contacts);
  }

}
