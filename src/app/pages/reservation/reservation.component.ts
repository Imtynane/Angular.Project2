import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common'

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule, NgIf],
  styleUrls: ['./reservation.component.scss'],
  templateUrl: './reservation.component.html'
})
export class ReservationComponent {

  loginFormVisible: boolean = true;
  registerFormVisible: boolean = true;

  constructor(private router: Router) { }

  showLoginForm() {
    this.loginFormVisible = true;
    this.registerFormVisible = false;
  }

  showRegisterForm() {
    this.loginFormVisible = false;
    this.registerFormVisible = true;
  }

  login() {
    // console.log('Connexion');
    this.showLoginForm();
  }

  reservation() {
    //console.log('Réservation clicked');
    this.showLoginForm();
    
  }

  register() {
    // console.log('Inscription');
    this.showRegisterForm();
  }

  toggleMenu() {
    const toggleMenu = document.querySelector('.menutoggle') as HTMLElement;
    const nav = document.querySelector('.nav') as HTMLElement;
    toggleMenu.classList.toggle('active');
    nav.classList.toggle('active');
  }
}