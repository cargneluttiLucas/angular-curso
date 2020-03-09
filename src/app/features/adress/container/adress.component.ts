<<<<<<< HEAD
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
=======
import { Component, OnInit, AfterViewInit, AfterContentInit, OnDestroy } from '@angular/core';
>>>>>>> c40b4db061b9fe184dc424038c24846d4ada120b
import { AdressService } from '../services/adress.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-adress',
    templateUrl: './adress.component.html',
    styleUrls: ['./adress.component.scss']
})
export class AdressComponent implements OnInit, AfterViewInit, OnDestroy {

    states: [] = [];
<<<<<<< HEAD
=======

    loadStatesUnsuscribe: Subscription;
>>>>>>> c40b4db061b9fe184dc424038c24846d4ada120b

    constructor(
        private domicilioService: AdressService
    ) { }

    ngOnInit() {
        this.loadSelect();
    }

    ngAfterViewInit() {

    }

    loadSelect() {
        this.loadStatesUnsuscribe = this.domicilioService.loadStates().subscribe((response) => {
            if (response) {
                this.states = response.provincias;
                console.log('Adentro de la suscripcion', this.states);
            }
        });
        console.log('Afuera de la suscripcion', this.states);
    }

    saveAdress() {
        console.log('guardando domicilio');
    }

    ngOnDestroy() {
        if (this.loadStatesUnsuscribe) {
            this.loadStatesUnsuscribe.unsubscribe();
        }
    }

    ngOnDestroy() {
        if(this.loadStatusUnsuscribe) {
            this.loadStatusUnsuscribe.unsubscribe();
        }
    }
}
