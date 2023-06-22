import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ReviewComponent } from './components/review/review.component';
import { ContactComponent } from './components/contact/contact.component';
import { ToursComponent } from './components/tours/tours.component';
const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },{
    path: "about",
    component: AboutComponent
  }, {
    path: "tours",
    component: ToursComponent
  }, {
    path: "gallery",
    component:GalleryComponent
  }, {
    path: "review",
    component: ReviewComponent
  }, {
    path: "contact",
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
