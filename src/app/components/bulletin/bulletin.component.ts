import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bulletin',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './bulletin.component.html',
  styleUrl: './bulletin.component.css'
})
export class BulletinComponent {
  bulletins = [
    {
      title: "From our friends at the Yale Center for Environmental Justice",
      caption: "The Yale Center for Environmental Justice is in the process of planning our fourth annual Global Environmental Justice Conference, with this year focusing on the theme of “Environmental Joy.” The conference aims to explore the ways in which environmental and climate justice and the communities engaged in that work generate joy. Guided by the notion that the ultimate goal of most environmental and climate work is to alleviate suffering and increase wellbeing, Environmental Joy will explore and celebrate the diverse ways that environmental justice achieves this goal."
    },
    {
      title: "Faculty/Alumni: Post Your Art Apprenticeship/Internship Opportunities for Undergraduates",
      caption: "The Yale Arts Apprenticeship Program is an initiative that connects Yale undergraduates, particularly those on financial aid, with professional arts practitioners of any discipline. As an option within Yale’s Summer Experience Award (SEA) funding model, the Arts Apprenticeship must fulfill the same basic requirements. Additional details, as well as those specific to the Arts Apprenticeship are included below. Yale faculty, alumni, or other arts practitioners interested in featuring positions through the program should contact Yale’s Creative Careers advisor.",
    },
    {
      title: "MAPPING PUBLIC ART IN NEW HAVEN",
      caption: "Hey everyone! I’ve been mapping public art in New Haven as part of my nonprofit project ArtAround and I’d love to invite you to join me, or just check it out and see what you think."
    }
  ]
}
