import { Component } from '@angular/core';
const EXPERIENCES = [
  {
    id: 1,
    title: 'Software Engineer',
    description: 'Google - Tiempo completo',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/640px-Ruby_logo.svg.png',
    lapse: '2012-2020',
  },
];
const EDUCATION_ITEMS = [
  {
    id: 1,
    title: 'UTN',
    description: 'Ingeneria de Sistemas',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/640px-Ruby_logo.svg.png',
    lapse: '2012-2022',
  },
];
const SKILLS = [
  {
    id: 1,
    title: 'Resolución de problemas',
    percentage: 90,
  },
  {
    id: 2,
    title: 'Diseno de sistemas',
    percentage: 30,
  },
];
const PROJECTS = [
  {
    id: 1,
    title: 'e-Farmacia',
    link: 'https://google.com',
    description: 'Desarrollo de una aplicación web para la farmacia',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';
  experiences = EXPERIENCES;
  educationItems = EDUCATION_ITEMS;
  skills = SKILLS;
  projects = PROJECTS;

  experienceTrackBy(index: number, experience: any) {
    return experience.id;
  }

  educationTrackBy(index: number, education: any) {
    return education.id;
  }

  skillTrackBy(index: number, skill: any) {
    return skill.id;
  }

  projectTrackBy(index: number, project: any) {
    return project.id;
  }
}
