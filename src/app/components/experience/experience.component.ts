import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  // experiences:any;

  experiences: any[] = [
    {
      role: 'Associate Software Engineer',
      company: 'Step2gen Technologies',
      period: 'Oct 2022 - Present',
      technologies: ['Angular', 'PrimeNG', 'Hangfire', 'SendGrid', 'ABP.io','DataDog','Sentary','Tailwind',],
      description: [
        'Worked on various projects including manufacturing clothing management, event management systems, and asset management systems',
        'Implemented features using Angular and PrimeNG to enhance UI/UX',
        'Utilized Hangfire for background job scheduling and SendGrid for email delivery',
        'Gained hands-on experience with ABP.io framework for rapid application development'
      ],
      current: true,
    },
    {
      role: 'Software Trainee',
      company: 'Step2gen Technologies',
      period: 'Feb 2022 - Sep 2022',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'C#', 'Entity Framework', 'Web API', 'SQL Server', 'Blazor'],
      description: [
        'Learned and practiced foundational technologies including HTML, CSS, and JavaScript',
        'Worked with C# and Entity Framework for backend development',
        'Developed Web APIs and utilized SQL Server for database management',
        'Explored Blazor for building interactive web UIs'
      ],
      current: false,
    },
  ];
}
