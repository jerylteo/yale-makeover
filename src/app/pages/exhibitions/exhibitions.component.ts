import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { CalendarComponent } from '../../components/calendar/calendar.component';

@Component({
  selector: 'app-exhibitions',
  standalone: true,
  imports: [
    HeroComponent,
    CalendarComponent
  ],
  templateUrl: './exhibitions.component.html',
  styleUrl: './exhibitions.component.css'
})
export class ExhibitionsComponent {

}
