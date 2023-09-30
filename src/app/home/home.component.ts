import { Component } from '@angular/core';
import { HomeDataService } from '../home-data.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  datos: any [] = [];
  users: User [] = [];


  homeTable1:boolean = true;
  homeTable2:boolean = false;
  homeTable3:boolean = false;


  mostrarTabla(num : number):void{
    switch (num){
      case 1:
        this.homeTable1 = true
        this.homeTable2 = false;
        this.homeTable3 = false;
        break;
      case 2:
        this.homeTable1 = false;
        this.homeTable2 = true;
        this.homeTable3 = false;
        break;
      case 3:
        this.homeTable1 = false;
        this.homeTable2 = false;
        this.homeTable3 = true;
        break;
      default:
    }
  }
  constructor(private dataService: HomeDataService,
    private router: Router) { }
    
    ngOnInit(): void {
      //get data
      this.dataService.getData().subscribe((data: any) => {
        this.datos = data;
      });
      //get users
      this.dataService.getUsers().subscribe((data_user: any) => {
        this.users = data_user});

    }
    //goHome para cerrar sesion pero es basicamente un back to page
    goHome(){
      this.router.navigate(['/login']);
    }

    //post new user
    formUser={
      full_name:'',
      identification:'',
      phone:'',
      role:'',
      username:'',
      password:'',}
  
    saveNewUser(){
        this.dataService.saveUser(this.formUser);
        this.ngOnInit();
      }
      
      //post data local
      formData={
        location:'',
        local_name:'',
        tenant_name:'',
        state:'',
        commerce_type:'',
        subcategorie:'',}
    
      saveNewData(){
          this.dataService.saveData(this.formData);
          this.ngOnInit();
        }


    //delete user
    delUser(event: any, id: number){
      if(confirm("¿Está seguro de querer borrar este usuario?")){
        event.target.innerText = "Borrando";
        this.dataService.deleteUser(id).subscribe((res:any)=>{
          this.ngOnInit()
          alert("Usuario eliminado con éxito")
        })
      }
    }
    //delete local data
    delData(event: any, id: number){
      if(confirm("¿Está seguro de querer borrar esta información?")){
        event.target.innerText = "Borrando";
        this.dataService.deleteData(id).subscribe((res:any)=>{
          this.ngOnInit()
          alert("Datos eliminados con éxito")
        })
      }
    }
    

}
