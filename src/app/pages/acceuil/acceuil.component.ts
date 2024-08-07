import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.scss'
})
export class AcceuilComponent implements OnInit, OnDestroy {
  onScroll() {
    if (typeof window !== 'undefined') {
      const header = document.querySelector('header');
      header?.classList.toggle("sticky", window.scrollY > 0);
    }
  }

  toggleMenu() {
    if (typeof window !== 'undefined') {
      const toggleMenu = document.querySelector('.menutoggle') as HTMLElement;
      const nav = document.querySelector('.nav') as HTMLElement;
      toggleMenu.classList.toggle('active');
      nav.classList.toggle('active');
    }
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.onScroll);
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.onScroll);
    }
  }
}