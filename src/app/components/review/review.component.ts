import { Component } from '@angular/core';
import { ReviewServiceService } from 'src/app/service/review-service.service';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {


  reviewitems:any;

  constructor(private service: ReviewServiceService){}

  ngOnInit():void{
    this.reviewitems = this.service.reviewitems;
  }
}
