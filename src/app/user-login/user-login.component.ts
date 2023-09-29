import { Component, NgModule } from '@angular/core';
import { User } from '../user';
import { LoginUserService } from '../login-user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  user : User = new User();

  constructor(private loginUserService: LoginUserService){

  }

  userLogin(){
    console.log(this.user)
    this.loginUserService.loginUser(this.user).subscribe(data=>{
      alert("Inicio de sesión exitoso")
    }, error=>alert("Lo sentimos, por favor ingrese el correo y/o contraseña correctos"));
  }

}
