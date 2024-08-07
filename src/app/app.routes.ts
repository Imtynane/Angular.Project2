import { Routes } from '@angular/router';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { UserComponent } from './pages/user/user.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path:  'home', component: AcceuilComponent},
    { path: 'menu', component: MenuComponent},
    { path: 'reservation', component: ReservationComponent},
    { path: 'users', component: UserComponent},
    { path: '', redirectTo: 'home', pathMatch:  'full' },
    { path: '**', component: PageNotFoundComponent},
];
