import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-prints',
  standalone: true,
  imports: [
    NgFor,
  ],
  templateUrl: './prints.component.html',
  styleUrl: './prints.component.css'
})
export class PrintsComponent {
  prints = [
    {
      featuring: "Featuring the work of the 2020 MFA graduates",
      title: "Body of Work: Yale School of Art MFA 2020",
      published: "Published 2021",
      content: "Body of Work showcases the collected work of the graduating MFA class of 2020, and marks the fourth installment of Yale School of Art’s all-school MFA book series. Featuring an afterword by Stavros Niarchos Foundation Dean and Professor of Art Marta Kuzma, and written contributions from Steven Rodriguez and Nicholas Weltyk, both Graphic Design ‘20; Carly Sheehan, Painting/Printmaking '20; Angela Chen, Photography '20; and David Roy, Sculpture '20.",
      edited: "Edited by Willis Kingery, Graphic Design '19; Designed by Bryant Wells, Graphic Design '20; cover illustrations by Timothy Brawner, Painting/Printmaking '20.",
      designed: "",
      meta: "304 pages, ISBN: 978-1-948891-07-3",
      thumbnail: "https://cdn.filestackcontent.com/resize=width:350/o19e6GA4SXqa3XeTqYL3"
    },
    {
      featuring: "Featuring the work of the 2019 MFA graduates",
      title: "Body of Work: Yale School of Art MFA 2019",
      published: "Published 2020",
      content: "Featuring a foreword by Stavros Niarchos Foundation Dean and Professor of Art Marta Kuzma, and written contributions from Emma Gregoline, Graphic Design ‘19; Emile Mausner, Painting/Printmaking '19; Genesis Báez, Photography '19; and Alfredo Diaz, Sculpture '19; Body of Work showcases the collected work of the graduating MFA class of 2019, and marks the third installment of Yale School of Art’s all-school MFA book series.",
      edited: "Edited by Willis Kingery, Graphic Design '19; Edi Dai, Painting/Printmaking '19; and David Knowles, Graphic Design '19.",
      designed: "Designed by David Knowles, Graphic Design '19; and Willis Kingery, Graphic Design '19.",
      meta: "256 pages, ISBN: 978-1-948891-02-8",
      thumbnail: "https://cdn.filestackcontent.com/resize=width:350/g89MS7DRNOPCo0ttyPBW"
    },
        {
      featuring: "Featuring the work of the 2018 MFA graduates",
      title: "Body of Work: Yale School of Art MFA 2019",
      published: "Published 2019",
      content: "Featuring a foreword by Stavros Niarchos Foundation Dean and Professor of Art Marta Kuzma, and written contributions from Bryce Wilner, Graphic Design ‘18; Ernest A. Bryant III, Painting/Printmaking '18; and Ian Page, Sculpture '18; this publication showcases the collected work of the graduating MFA class of 2018, and marks the second installment of Yale School of Art’s all-school MFA book series.",
      edited: "Edited by Ayham Ghraowi, Graphic Design '17; Designed by Hrefna Sigurðardóttir, Graphic Design '18; Cover image: Dan Swindel, Photography '18, Untitled (2019).",
      designed: "Designed by David Knowles, Graphic Design '19; and Willis Kingery, Graphic Design '19.",
      meta: "256 pages, ISBN: 978-1-948891-00-4",
      thumbnail: "https://cdn.filestackcontent.com/resize=width:350/nmJJV9DnR5mpWAFb3Qwe"
    },
    
  ]
}
