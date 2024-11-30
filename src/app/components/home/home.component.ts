import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ExperienceComponent } from "../experience/experience.component";
import { ProjectComponent } from "../project/project.component";
import { ContactComponent } from "../contact/contact.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ExperienceComponent, ProjectComponent, ContactComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
