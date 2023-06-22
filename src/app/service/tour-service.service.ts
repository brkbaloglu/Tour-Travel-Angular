import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TourServiceService {

  constructor() { }

  touritems = [
    {
      id:1,
      name: "Tour 1",
      description: "Tour 1",
      image: "../../../assets/img/3.jpg"
    },
    {
      id:2,
      name: "Tour 2",
      description: "Tour 2",
      image: "../../../assets/img/4.jpg"
    },
    {
      id:3,
      name: "Tour 3",
      description: "Tour 3",
      image: "../../../assets/img/9.jpg"
    },
    {
      id:4,
      name: "Tour 4",
      description: "Tour 4",
      image: "../../../assets/img/19.jpg"
    }
  ];
}
