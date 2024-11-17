import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
  videoUrl = "https://www.youtube.com/embed/smn0Rx65Lzc?list=PLsItDf44yBTGMwlXccUqx-J_s7ZxeORMm";
}