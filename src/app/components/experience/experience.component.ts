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
      role: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'AWS'],
      description: [
        'Led a team of 5 developers in building a cloud-based SaaS platform',
        'Implemented microservices architecture reducing system latency by 40%',
        'Developed CI/CD pipelines using GitHub Actions and AWS',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Innovations LLC',
      period: '2020 - 2022',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Docker'],
      description: [
        'Developed and maintained multiple client-facing web applications',
        'Implemented responsive designs and improved mobile UX',
        'Reduced API response time by 60% through optimization',
        'Collaborated with UX team to implement new features'
      ]
    },
    {
      role: 'Frontend Developer',
      company: 'WebCraft Studios',
      period: '2019 - 2020',
      technologies: ['Vue.js', 'JavaScript', 'SCSS', 'RESTful APIs'],
      description: [
        'Built responsive web interfaces using Vue.js and SCSS',
        'Integrated third-party APIs and payment gateways',
        'Improved website performance scores by 25%',
        'Participated in daily scrum meetings and sprint planning'
      ]
    }
  ];
}
