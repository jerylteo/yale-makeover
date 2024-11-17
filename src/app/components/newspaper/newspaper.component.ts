import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-newspaper',
  standalone: true,
  imports: [
    NgFor,
    ButtonComponent
  ],
  templateUrl: './newspaper.component.html',
  styleUrl: './newspaper.component.css'
})
export class NewspaperComponent {
  news = [
    {
      date: "October 31, 2024",
      title: "News from New Haven: October 2024",
      caption: "Join us in New Haven this week & next! Dean Pinder’s month with strong women alums Welcoming Shahzia Sikander to campus & more",
      image: "https://cdn.filestackcontent.com/resize=width:700/hVzMsyQFW7BtJJCy5bXw",
      credits: "This issue’s header image by Coco Shiya Yuan, Graphic Design MFA ‘25."
    },
    {
      date: "September 30, 2024",
      title: "News from New Haven: September 2024",
      caption: "Fall 2024 curricular happenings & highlights Distinguished Lecture Series continues with Shahzia Sikander Highlights from summer programs abroad: Paul Mellon, Pasanella, and Mahler & LeWitt Studios & more",
      image: "https://cdn.filestackcontent.com/resize=width:700/JI6U8N1KTia7VLgmR2eg",
      credits: "This issue’s header image by Xing Zhang, Graphic Design MFA ‘27."
    },
    {
      date: "September 27, 2024",
      title: "Sam Contis appointed full-time faculty member in Photography",
      caption: "",
      image: "https://cdn.filestackcontent.com/resize=width:350/lrksh0fXTDSA6V8Nziyj",
      credits: "Sam Contis: Transit, Carré d'Art, Nîmes, France, 2022, Installation view, 2022. Image courtesy of the artist."
    },
    {
      date: "September 20, 2024",
      title: "Welcome to our 2024 Photography Teaching Fellow",
      caption: "",
      image: "https://cdn.filestackcontent.com/resize=width:350/sh8S2rK7SdaCp7LLt999",
      credits: "Shelli Weiler, Photography MFA ‘24, Anonymous Star. Courtesy of the artist."
    }
  ]
}
