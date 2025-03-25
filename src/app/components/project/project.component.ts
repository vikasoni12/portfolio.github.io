import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
  demo: string;
  github: string;
  technologies: string[];
}

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  projects = [
    {
      title: 'Order-Sport Jersey E-Commerce & Manufacturing',
      description:
        'An application that processes orders from retailers and wholesalers, manufactures customized sports jerseys using KitBuilder, and delivers them to customers.',
      image: 'images/oms.jpg',
      demo: '#', // Add demo link if available
      github: 'https://github.com/yourusername/jersey-ecommerce', // Replace with your repo
      technologies: [
        'Angular',
        'PrimeNG',
        '.NET Core',
        'Bootstrap',
        'SCSS',
        'SQL Server',
        'KitBuilder',
        'SendGrid',
        'Hangfire',
      ],
    },
    {
      title: 'Event Management System',
      description:
        'A system that allows users to book hotels and manage event-related services like food, beverages, and transportation.',
        image: 'images/event.jpg',
      demo: '#', // Add demo link if available
      github: 'https://github.com/yourusername/event-management', // Replace with your repo
      technologies: [
        'Angular',
        'PrimeNG',
        '.NET Core',
        'ABP.io',
        'Tailwind CSS',
        'SQL Server',
        'SendGrid',
        'Hangfire',
      ],
    },
    {
      title: 'Asset Management System',
      description:
        'A system that helps manage building assets like fans, bulbs, ACs, and other equipment, including supplier and technician management.',
        image: 'images/asset.jpg',
      demo: '#', // Add demo link if available
      github: 'https://github.com/yourusername/asset-management', // Replace with your repo
      technologies: [
        'Angular',
        'PrimeNG',
        '.NET Core',
        'Hangfire',
        'MySQL',
      ],
    },
  ];

  // projects: Project[] = [
  //   {
  //     title: 'Clothing E-Commerce Platform',
  //     description: 'A full-stack e-commerce platform with payment integration and admin dashboard',
  //     image: 'images/oms.jpg',
  //     demo: 'https://demo-ecommerce.com',
  //     github: 'https://github.com/yourusername/ecommerce',
  //     technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe']
  //   },
  //   {
  //     title: 'Event Management Web Application',
  //     description: 'Real-time task management application with team collaboration features',
  //     image: 'images/event.jpg',
  //     demo: 'https://demo-taskmanager.com',
  //     github: 'https://github.com/yourusername/taskmanager',
  //     technologies: ['React', 'Firebase', 'Material-UI']
  //   },
  //   {
  //     title: 'Asset Management Web Application',
  //     description: 'Interactive weather dashboard with location-based forecasts',
  //     image: 'images/asset.jpg',
  //     demo: 'https://demo-weather.com',
  //     github: 'https://github.com/yourusername/weather',
  //     technologies: ['Vue.js', 'OpenWeather API', 'Chart.js']
  //   }
  // ];
}
