import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { AdressService } from '../services/adress.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-adress',
    templateUrl: './adress.component.html',
    styleUrls: ['./adress.component.scss']
})
export class AdressComponent implements OnInit, AfterViewInit, OnDestroy {

    states: [] = [];

    constructor(
        private domicilioService: AdressService
    ) { }

    ngOnInit() {
        this.loadSelect();
    }

    ngAfterViewInit() {
    }

    loadSelect() {
        this.domicilioService.loadStates().subscribe((response) => {
            if (response) {
                this.states = response.provincias;
            }
        });
    }

    ngOnDestroy() {
        if(this.loadStatusUnsuscribe) {
            this.loadStatusUnsuscribe.unsubscribe();
        }
    }
}
