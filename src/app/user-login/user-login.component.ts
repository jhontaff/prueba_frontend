import { Component, NgModule } from '@angular/core';
import { User } from '../user';
import { LoginUserService } from '../login-user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  user : User = new User();
  constructor(
    private loginUserService: LoginUserService,
    private router: Router
    ){ }

  userLogin(){
    this.loginUserService.loginUser(this.user).subscribe((data)=>{
      //alert("Inicio de sesión exitoso");
      this.router.navigate(['/home']);
    }, error=>alert("Lo sentimos, por favor ingrese el correo y/o contraseña correctos"));
  }

}
