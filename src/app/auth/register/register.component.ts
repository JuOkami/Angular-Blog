import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../interfaces/user';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private userService : UsersService, private router : Router){}

  name : string = "";
  password : string = "";
  message : string = "";

  register() {
    this.displayMessage();
    if (this.name != "" && this.password != "" && this.userService.isPseudoFree(this.name)){
    let user: User = {id: 0, name : this.name, password : this.password}
    this.userService.writeUser(user);
    this.router.navigate(['/'])
    }
  }

  displayMessage(){
    if (this.name == ""){
      this.message = "Veuillez saisir un pseudo";
      return;
    }
    if (this.password == ""){
      this.message = "Veuillez saisir un mot de passe";
      return;
    }
    if (!this.userService.isPseudoFree(this.name)){
      this.message = "Ce pseudo est deja pris";
      return;
    }
  }

}
