import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [
    NgClass,
    ButtonComponent
  ],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent {
  @Input() className:string = "bg-orange-50";
}
