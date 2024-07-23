import { Injectable } from '@angular/core';

import {
  Education,
  Skill,
  SkillCategory,
  WorkExperience,
} from './resume.model';

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
        'Focused on Angular development for software projects in the banking and transportation sectors. Utilized Angular, NgRx (RxJs), TypeScript, HTML, SCSS for front-end development.',
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
      startDate: '2015',
      endDate: '2020',
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
      startDate: '2014',
      endDate: '2015',
      institution: 'Uzhhorod National University',
      location: 'Uzhhorod, Ukraine',
      description:
        'Obtained master’s degree and complete higher education in the speciality "Information management systems and technologies" and qualification "master of information management systems and technologies, lecturer of computer science',
      title: '',
      degree: `Master's`,
    },
    {
      id: '2',
      startDate: '2010',
      endDate: '2014',
      institution: 'Uzhhorod National University',
      location: 'Uzhhorod, Ukraine',
      description:
        'Completed the full course of State University "Uzhhorod National University" having specialized in "Computer science" and obtained qualification of bachelor of computer sciences',

      title: '',
      degree: `Bachelor's`,
    },
  ];

  languagesSkills: Skill[] = [
    { id: '1', title: 'English - B2' },
    { id: '2', title: 'Polish - C1' },
    { id: '3', title: 'Ukrainian - native' },
    { id: '4', title: 'Russian - native' },
    { id: '5', title: 'Hungarian - A2' },
    { id: '6', title: 'Norwegian - A1' },
  ];

  programmingSkills: Skill[] = [
    { id: '7', title: 'HTML' },
    { id: '8', title: 'CSS' },
    { id: '16', title: 'SASS/SCSS' },
    { id: '9', title: 'JavaScript' },
    { id: '10', title: 'TypeScript' },
    { id: '11', title: 'Angular' },
    { id: '12', title: 'RxJs' },
    { id: '12', title: 'NgRx' },
    { id: '11', title: 'Angular CLI' },
    { id: '22', title: 'RESTful APIs' },
    { id: '14', title: 'Git' },
    { id: '15', title: 'Hg Mercurial' },
    { id: '29', title: 'Jira' },
    { id: '31', title: 'Figma' },
    { id: '13', title: 'Docker' },
    { id: '17', title: 'Bootstrap' },
    { id: '18', title: 'Webpack' },
    { id: '26', title: 'MongoDB' },
    { id: '27', title: 'SQL' },
    { id: '32', title: 'Adobe XD' },
    { id: '33', title: 'VSCode' },
    { id: '35', title: 'Prettier' },
    { id: '36', title: 'Netlify' },
    { id: '36', title: 'GitHub' },
  ];
  professionalSkills: Skill[] = [
    { id: '13', title: 'Communication' },
    { id: '14', title: 'Project Management' },
    { id: '15', title: 'Team Leadership' },
    { id: '16', title: 'Problem-Solving' },
    { id: '17', title: 'Technical Proficiency' },
    { id: '18', title: 'Time Management' },
  ];
}
