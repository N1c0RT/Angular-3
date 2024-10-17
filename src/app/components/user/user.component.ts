import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IUser } from '../../models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {



  constructor(private UserDTO: UserService, private router: Router){}

  userDetail: IUser[] = [];

  ngOnInit() {

    this.UserDTO.getUser(1,10).subscribe({

      next: (response: any) => {

        this.userDetail = response.data 

        console.log(response);

      }
    })

  }

  goToDetail(id: number){
    this.router.navigate(['/dettagli', id]);
  }
}
