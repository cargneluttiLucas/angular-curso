import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(private contactService: ContactsService) { }

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

}
