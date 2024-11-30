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
  projects: Project[] = [
    {
      title: 'Clothing E-Commerce Platform',
      description: 'A full-stack e-commerce platform with payment integration and admin dashboard',
      image: 'images/oms.jpg',
      demo: 'https://demo-ecommerce.com',
      github: 'https://github.com/yourusername/ecommerce',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'Event Management Web Application',
      description: 'Real-time task management application with team collaboration features',
      image: 'images/event.jpg',
      demo: 'https://demo-taskmanager.com',
      github: 'https://github.com/yourusername/taskmanager',
      technologies: ['React', 'Firebase', 'Material-UI']
    },
    {
      title: 'Asset Management Web Application',
      description: 'Interactive weather dashboard with location-based forecasts',
      image: 'images/asset.jpg',
      demo: 'https://demo-weather.com',
      github: 'https://github.com/yourusername/weather',
      technologies: ['Vue.js', 'OpenWeather API', 'Chart.js']
    }
  ];
}
