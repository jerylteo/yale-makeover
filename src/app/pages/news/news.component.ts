import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';
import { NewspaperComponent } from '../../components/newspaper/newspaper.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    HeroComponent,
    NewsletterComponent,
    NewspaperComponent
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

}
