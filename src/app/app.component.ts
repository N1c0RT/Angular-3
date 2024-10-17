import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CasaPaginaComponent } from './components/casa-pagina/casa-pagina.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, HomepageComponent, CasaPaginaComponent, ContactComponent, AboutComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-3';

  constructor(private route: Router) {}

  goToUser() {
    this.route.navigate(['/user']);
  }
}
