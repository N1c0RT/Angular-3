import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profilo-switch',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './profilo-switch.component.html',
  styleUrl: './profilo-switch.component.css'
})
export class ProfiloSwitchComponent {
  ruolo: string = "";
}
