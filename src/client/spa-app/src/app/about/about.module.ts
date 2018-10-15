import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { routes } from './about.routing';

@NgModule({
  imports: [
    CommonModule,
    routes
  ],
  declarations: [HomeComponent]
})
export class AboutModule { }
