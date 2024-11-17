import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { PrintsComponent } from '../../components/prints/prints.component';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [
    HeroComponent,
    PrintsComponent,
    NewsletterComponent
  ],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css'
})
export class PublicationsComponent {

}
