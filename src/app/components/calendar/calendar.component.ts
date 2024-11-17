import { Component } from '@angular/core';
import { NgClass, NgFor, } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    ButtonComponent
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  events = [
    {
      title: '"Feedback Loop" - First-Year MFA Exhibition',
      thumbnail: "https://ucarecdn.com/578279d5-d366-43e9-bc0c-18cc84ae892a/-/crop/800x400/0,45/-/preview/",
      caption: "Fall 2024 1st-Year MFA Show",
      dates: "November 13 - December 13",
      day: "13",
      month: "Nov",
      venue: "1156 Chapel Street",
      time: "",
      isExpanded: false,
      tags: ["Incoming Students (1st year MFAs)", "Open to Yale Community", "Exhibitions"],
      reception: "Public reception: Friday, November 15, 6-8PM",
      publicity: "Open to the Yale community and invited, accompanied guests",
      description: "Featuring work by Alixe Turner, Amanda Atria, Ambrose Murray, Amy Chasse, Amy Fang, Amy Wang, Andrew Warner, Aru Apaza, Bendy Sohn, Cameron Patricia Downey, Camille Gwise, Chen Xiangyun, Chris Cole, Christian Badach, Christopher Postlewaite, Cierra Peters, David Jung, Denzel Boyd, Ellen Fabini, Em Wall, Faye Wei Wei, Gabriella N. Báez, Hana Jelovšek & Gal Šnajder, Hasti Kasraei, Hazal Ozgur, Heejae Kim, Hongting Zhu, Ian Faden, Inkpa Mani, Izza Alyssa, Jasmine Clarke, John Shen, Josh Rabineau, Josh Vasquez, Kiki Serna, Kimberly Heard, Leyla Tonak, Mar Figueroa, Michael Stevens, Nabla Mohammad Yahya, Olivia Reavey, Priscilla Young, Rebecca Cheng, Sok Song, Taisha Carrington, Vernando Reuben, Wenqing Zhai, Xiwen Zhang, Yuna Cho, and Yuwei Tu.Exhibition identity by Amy Fang and Camille Jen-Mei Gwise, Graphic Design MFAs '26.",
      infos: []
    },
    {
      title: "MFA Crits in Sculpture",
      thumbnail: "",
      caption: "Sculpture critiques during the Fall 2024 semester are open to the School of Art...",
      dates: "",
      day: "19",
      month: "Nov",
      venue: "36 Edgewood Ave, New Haven",
      time: "12:00 PM - 3:30 PM EST",
      isExpanded: false,
      tags: ["Sculpture", "MFA Crits", "Open to SoA Community"],
      reception: "",
      publicity: "",
      description: "Sculpture critiques during the Fall 2024 semester are open to the School of Art community and will take place throughout 36 Edgewood Ave. Please find the exact location of each crit below or on the Sculpture Hub (accessible via the Student Hub).",
      infos: [
        {
          time: "12-1:30PM",
          crit: "Joy Li",
          location: "location TBD"
        },
        {
          time: "2-3:30PM",
          crit: "Rachel Rosheger",
          location: "location TBD"
        }
      ]
    }
  ];

  toggleExpand(index: number): void {
    this.events[index].isExpanded = !this.events[index].isExpanded;
  }
  

}
