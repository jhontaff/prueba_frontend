import { Component, NgModule } from '@angular/core';
import { User } from '../user';
import { LoginUserService } from '../login-user.service';
import { HomeDataService } from '../home-data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  user : User = new User();
  datos: any[]=[];
  constructor(
    private loginUserService: LoginUserService,
    private router: Router,
    private data: HomeDataService
    ){ }

  userLogin(){
    this.loginUserService.loginUser(this.user).subscribe((data)=>{
      //alert("Inicio de sesión exitoso");
      this.router.navigate(['/home']),
      this.data.getData().subscribe((data:any)=>{
        this.datos = data;
      });
    }, error=>alert("Lo sentimos, por favor ingrese el correo y/o contraseña correctos"));
  }

}
