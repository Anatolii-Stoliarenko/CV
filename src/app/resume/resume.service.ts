import { Injectable } from '@angular/core';

import { Education, WorkExperience } from './resume.model';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  constructor() {}

  workExperiences: WorkExperience[] = [
    {
      id: '1',
      startDate: '2023/11',
      endDate: 'Present',
      jobTitle: 'Web Developer',
      companyName: 'Freelance',
      location: 'Warsaw, Mazowieckie, Poland',
      description:
        'Working as a freelance web developer handling various projects involving frontend development using modern web technologies.',
    },
    {
      id: '3',
      startDate: '2023/04',
      endDate: '2023/09',
      jobTitle: 'Angular Developer',
      companyName: 'Basement Sp. z o.o.',
      location: 'Warsaw, Poland',
      description:
        'Focused on Angular development for software projects in the banking and transportation sectors. Utilized Angular, NgRx, TypeScript, JavaScript, HTML, CSS, and SCSS for front-end development.',
    },
    {
      id: '2',
      startDate: '2022/10',
      endDate: '2023/03',
      jobTitle: 'Computer Scientist',
      companyName: 'Olsvit Sp. z o.o.',
      location: 'Warsaw, Poland',
      description:
        'Engaged in software development projects, focusing on innovative solutions and system optimization.',
    },
    {
      id: '3',
      startDate: '2022/02',
      endDate: '2022/08',
      jobTitle: 'Construction Engineer',
      companyName: 'Granar Sp. z o.o.',
      location: 'Warsaw, Poland',
      description:
        'Oversaw construction projects, ensuring compliance with engineering standards and safety regulations.',
    },
    {
      id: '4',
      startDate: '2020/05',
      endDate: '2021/12',
      jobTitle: 'Construction Engineer',
      companyName: 'Block-PM Sp. z o.o.',
      location: 'Warsaw, Poland',
      description:
        'Managed construction activities, coordinated with project teams, and ensured timely project completion.',
    },
    {
      id: '5',
      startDate: '2015/01',
      endDate: '2020/12',
      jobTitle: 'Own construction company',
      companyName: 'Elit-remont',
      location: 'Kiev, Ukraine',
      description:
        'Owned and operated a construction company, managing various construction projects from inception to completion.',
    },
  ];

  education: Education[] = [
    {
      id: '1',
      startDate: '2006/09',
      endDate: '2015/06',
      institution: 'Uzhhorod National University',
      location: 'Uzhhorod, Ukraine',
      description:
        'Completed a comprehensive program in computer and information sciences, focusing on various aspects of support services, software development, and IT management.',
      title: '',
    },
  ];
}
