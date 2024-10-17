import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-user',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})

export class FormUserComponent {

  constructor(private router: Router) { }

  utente = {
    nome: '',
    cognome: '',
    email: '',
    password: '',
  }

  onSubmit(form: NgForm) {
    if(form.valid){
      console.log(this.utente);
      this.router.navigate(['/casa-pagina']);
    } else {
      console.log("il form non è valido");
    }
  }
}
