import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    ButtonComponent,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input() heroUrl:string = 'https://cdn.filestackcontent.com/resize=width:525/output=format:jpg/JeS4GuttRz29r2ntLEpr';
  @Input() title:string = 'Yale School of Art';
  @Input() description:string = 'The School of Art is one of Yale’s Graduate & Professional Schools conferring MFA degrees in Graphic Design, Painting/Printmaking, Photography, and Sculpture; and offers undergraduate-level art courses to Yale College students. Our website exists as an ongoing collaborative experiment in digital publishing and information sharing. It functions as a wiki—all members of the School of Art community have the ability to add new, and edit most existing content.';
  @Input() cta1:string = "Apply Now";
  @Input() cta2:string = "Learn More";
}
