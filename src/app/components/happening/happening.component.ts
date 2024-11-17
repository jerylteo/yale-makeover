import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-happening',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './happening.component.html',
  styleUrl: './happening.component.css'
})
export class HappeningComponent {
  happenings = [
    {
      title: "Developing Visiting Artist",
      link: "https://www.art.yale.edu/news/visiting-artist-lectures",
      targets: [
        {
          title: "Fall 2024",
          target: "https://www.art.yale.edu/news/visiting-artist-lectures/fall-2024"
        },
        {
          title: "Spring 2024",
          target: "https://www.art.yale.edu/news/visiting-artist-lectures/spring-2024"
        }
      ]
    },
    {
      title: "Exhibitions",
      link: "https://www.art.yale.edu/exhibitions",
      targets: [
        {
          title: "Second-Year MFA Exhibition",
          target: "https://www.art.yale.edu/exhibitions",
          dates: "September 18 - October 4, 2024"
        },
        {
          title: "Undergraduate Exhibition",
          target: "https://www.art.yale.edu/exhibitions",
          dates: "October 16 - November 24, 2024"
        },
        {
          title: "First-Year MFA Exhibition",
          target: "https://www.art.yale.edu/exhibitions",
          dates: "November 13 - December 13, 2024"
        }
      ]
    }
  ]
}
