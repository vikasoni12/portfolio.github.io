import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  skills: string[] = [
    'Angular', 'React', 'Node.js', 'TypeScript',
    'Python', 'MongoDB', 'PostgreSQL', 'AWS',
    'Docker', 'Kubernetes', 'CI/CD', 'Git'
  ];
}
