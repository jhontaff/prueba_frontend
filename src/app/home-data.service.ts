import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {
  private dataURL='http://localhost:9091/home/alldata';
  private userURL='http://localhost:9091/home/allusers';
  private delUserURL = 'http://localhost:9091/home/user/';
  private delDataURL = 'http://localhost:9091/home/data/';
  private postUserUrl = 'http://localhost:9091/home/saveuser'
  private postDataUrl = 'http://localhost:9091/home/savedata'

  constructor(private httpClient: HttpClient) { }
  
  getData(){
    return this.httpClient.get(this.dataURL)
  }
  getUsers(){
    return this.httpClient.get(this.userURL)
  }

  deleteUser(id: number){
    return this.httpClient.delete(this.delUserURL+id)
  }
  deleteData(id: number){
    return this.httpClient.delete(this.delDataURL+id)
  }

  saveUser(user: any){
    this.httpClient.post(this.postUserUrl, user).subscribe((res:any)=>{
      alert("Usuario creado")
    });
  }

  saveData(newData: any){
    this.httpClient.post(this.postDataUrl, newData).subscribe((res:any)=>{
      alert("Local creado")
    });
  }
}
