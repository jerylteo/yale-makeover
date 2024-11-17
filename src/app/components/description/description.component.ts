import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
  @Input() statement:string = "The mission of the Yale School of Art is to provide students with intellectually informed, hands-on instruction in the practice of an array of visual arts media within the context of a liberal arts university. As a part of the first institution of higher learning to successfully integrate a studio-based education into such a broad pedagogical framework, the Yale School of Art has a long and distinguished history of training artists of the highest caliber. A full-time faculty of working artists in conjunction with a diverse cross-section of accomplished visiting artists collaborate to design a program and foster an environment where the unique talents and perspectives of individual students can emerge and flourish.";
  @Input() title:string = "Mission Statement";

  @Input() className:string = "bg-gray-50";
}
