import { Component } from '@angular/core';
import { VideoComponent } from '../../components/video/video.component';
import { InverteddescriptionComponent } from '../../components/inverteddescription/inverteddescription.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-apply',
  standalone: true,
  imports: [
    VideoComponent,
    InverteddescriptionComponent,
    ButtonComponent
  ],
  templateUrl: './apply.component.html',
  styleUrl: './apply.component.css'
})
export class ApplyComponent {

}
