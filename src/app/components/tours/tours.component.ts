import { Component } from '@angular/core';
import { TourServiceService } from 'src/app/service/tour-service.service';
@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent {


  touritems:any;

  constructor(private service:TourServiceService){}

  ngOnInit():void{
    this.touritems = this.service.touritems;
  }
}
