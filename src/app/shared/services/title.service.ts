import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router, ActivationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Injectable({
    // tree-shaking - Angular 6
    providedIn: 'root'
})
export class TitleService {

    // Subject: puede manejar mulipres subscipriciones, a demas es capas de emitir eventos
    private titleSubject: Subject<string> = new Subject();
    // Generamos una variabel publica, para solo escuchar los eventos solamente.
    public title$: Observable<string> = this.titleSubject.asObservable();

    // private title
    constructor(
        private router: Router,
        private title: Title
    ) {
        this.init();
    }

    init() {
        this.router.events.pipe(
            filter((event => event instanceof ActivationEnd)),
            filter((event: ActivationEnd) => event.snapshot.firstChild === null),
            map((event: ActivationEnd) => event.snapshot.data)
        ).subscribe(data => {
            // Agregamos el titulo en la pestana de Google Chrome
            this.title.setTitle(data.title);
            this.titleSubject.next(data.title);
        });
    }

}
