import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { HappeningComponent } from '../../components/happening/happening.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    HeroComponent,
    HappeningComponent
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

}
