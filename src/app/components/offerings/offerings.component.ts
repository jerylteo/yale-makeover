import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-offerings',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './offerings.component.html',
  styleUrl: './offerings.component.css'
})
export class OfferingsComponent {

}
