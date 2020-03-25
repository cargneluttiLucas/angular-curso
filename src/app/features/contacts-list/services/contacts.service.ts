import { Injectable } from '@angular/core';
import { Contact, PhoneType } from '../models/contact.model';

@Injectable({
    providedIn: 'root'
})
export class ContactsService {

    public selectedContact: Contact = null;
    constructor() { }


    getContacts() {
        return [
            new Contact(1, 'albert', 'assets/default-user.png', [
                {type: PhoneType.work, number: 93200621621 },
                {type: PhoneType.home, number: 93444001100 },
                {type: PhoneType.home, number: 629304050 }
            ], 'albert@email.com', 'Villaroel 52, 08027, Barcelona' ),
            new Contact(2, 'Daniel', 'assets/default-user.png', [
                { type: PhoneType.mobile, number: 111223344 }
            ] ),
            new Contact(3, 'lucas', 'assets/default-user.png', [
                {type: PhoneType.home, number: 123456789 },
                {type: PhoneType.mobile, number: 111111122 }
            ], 'lucas@email.com', 'Raval 7, 08020, Barcelona' ),
            new Contact(4, 'Martin', 'assets/default-user.png', [
                {type: PhoneType.work, number: 222334455 },
                {type: PhoneType.mobile, number: 222222222 }
            ], 'martin@email.com', 'Boquería 12, 08021, Barcelona' ),
            new Contact(5, 'Samantha', 'assets/default-user.png', [
                {type: PhoneType.work, number: 931224455 },
                {type: PhoneType.home, number: 934122233 },
                {type: PhoneType.mobile, number: 662113344 }
            ], 'samantha@email.com', 'Plaza Pau Vila 1, 08039, Barcelona' ),
            new Contact(6, 'Flor', 'assets/default-user.png', [
                {type: PhoneType.mobile, number: 939876655 },
            ], 'flor@email.com', 'Arago 356, 08032, Barcelona' ),
            new Contact(7, 'Fernando', 'assets/default-user.png', [
                {type: PhoneType.mobile, number: 939876655 },
            ], 'fer@email.com', 'Arago 356, 08032, Barcelona' ),
            new Contact(8, 'Emiliano', 'assets/default-user.png', [
                {type: PhoneType.mobile, number: 939876655 },
            ], 'emi@email.com', 'Arago 356, 08032, Barcelona' ),
            new Contact(9, 'Federico', 'assets/default-user.png', [
                {type: PhoneType.mobile, number: 939876655 },
            ], 'fede@email.com', 'Arago 356, 08032, BNC' ),
        ];
    }

}
