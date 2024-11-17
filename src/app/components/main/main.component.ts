import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { HappeningComponent } from '../happening/happening.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { BulletinComponent } from '../bulletin/bulletin.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeroComponent,
    HappeningComponent,
    CalendarComponent,
    NewsletterComponent,
    BulletinComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
