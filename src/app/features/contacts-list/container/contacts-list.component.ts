import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  public contacts: Contact[] = [];

  constructor(public contactService: ContactsService) { }

  ngOnInit(): void {
    // obtenemos todos los contactos
    this.contacts = this.contactService.getContacts();
  }

  // obtengo el click de la card individual.
  onContacSelected(idContact: number): void {
    this.contactService.selectContactById(idContact);
  }
}
