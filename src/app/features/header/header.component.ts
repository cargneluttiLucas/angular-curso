import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { TitleService } from '../../shared/services/title.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('homeState', [

      state('hide', style({
        transform: 'translateY(0%)'
      })),
      state('show', style({
        transform: 'translateY(-100%)'
      })),
      transition('show => hide', animate('500ms ease-out')),
      transition('hide => show', animate('500ms ease-in'))
    ])
  ]
})
export class HeaderComponent implements OnInit, AfterViewChecked {

  public showHeader = true;
  private lastScrollTop = 0;
  private navHeight = 0;
  @ViewChild('nav') nav: ElementRef;
  constructor(public titleService: TitleService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    // Called after every check of the component's view. Applies to components only.
    // Add 'implements AfterViewChecked' to the class.
    this.navHeight = this.nav.nativeElement.offsetHeight;
    document.body.style.marginTop = `${this.navHeight}px`;
  }

  @HostListener('window:scroll')
  handleScroll() {
    // el scrollTop comienza en 0 luego va aumentando a medida que vamos scrolling.
    const scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if (scrollTop > this.lastScrollTop && this.navHeight < scrollTop) {
      this.showHeader = false;
    } else {
      this.showHeader = true;
    }
    // guardo la direccion del scroll up o down
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
 }

}
