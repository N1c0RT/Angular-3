import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { ProfiloSwitchComponent } from './components/profilo-switch/profilo-switch.component';
import { CasaPaginaComponent } from './components/casa-pagina/casa-pagina.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { DetailComponent } from './components/detail/detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormUserComponent } from './components/form-user/form-user.component';

export const routes: Routes = [
    {path: '', redirectTo: '/casa-pagina', pathMatch: 'full'},
    {path: 'user', component: UserComponent},
    {path: 'profilo-switch', component: ProfiloSwitchComponent},
    {path: 'casa-pagina', component: CasaPaginaComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},
    {path: 'dettagli/:id', component: DetailComponent},
    {path: 'form-user', component: FormUserComponent},
    {path: '**', component: PageNotFoundComponent},
];
