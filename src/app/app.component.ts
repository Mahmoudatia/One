import { Component } from '@angular/core';
import { BookingService } from './booking.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name: string;
  constructor(public booking: BookingService){
    this.name = booking.name
  }
}
