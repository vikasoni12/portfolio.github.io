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
    'Angular', '.Net Core','Abp.io','JavaScript', 'TypeScript','Bootstrap','Tailwind','SCSS','CSS',
    'MySQL','SQL Server', 'Azure', 'AWS',
    'Docker','CI/CD', 'Git'
  ];
}
