import { Component } from '@angular/core';
import { HomeDataService } from '../home-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  datos: any [] = [];
  constructor(
    private dataService: HomeDataService) { }

    ngOnInit(): void {
      this.dataService.getData().subscribe((data: any) => {
        this.datos = data;
      });
      console.log(this.datos);
    }
}
