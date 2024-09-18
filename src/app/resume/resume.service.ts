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
      jobTitle: 'Full-stack Developer',
      companyName: 'Freelance',
      location: 'Warsaw, Mazowieckie, Poland',
      description:
        'Working as a freelance full-stack web developer, handling various projects involving both frontend and backend development. Utilized modern web technologies to build scalable, responsive applications, integrating frontend frameworks with robust server-side solutions. Experience includes developing RESTful APIs, managing databases, and ensuring efficient deployment processes.',
    },
    {
      id: '3',
      startDate: '2023/04',
      endDate: '2023/09',
      jobTitle: 'Angular Developer',
      companyName: 'Basement Sp. z o.o.',
      location: 'Warsaw, Poland',
      description:
        'Focused on developing dynamic and responsive front-end applications in the banking and transportation sectors. Leveraged Angular, NgRx (RxJs), TypeScript, HTML, and SCSS to build robust user interfaces and manage complex state management. Contributed to optimizing performance and improving user experience through well-structured, scalable code.',
    },
    {
      id: '2',
      startDate: '2019/02',
      endDate: '2023/03',
      jobTitle: 'Computer Scientist',
      companyName: 'Olsvit Sp. z o.o.',
      location: 'Warsaw, Poland',
      description:
        'Assisted in office tasks, including managing printers, troubleshooting network issues, and maintaining computer systems. Leveraged free time to develop programming skills, working on various software projects and continuously improving technical expertise.',
    },
    {
      id: '3',
      startDate: '2012/05',
      endDate: '2015/12',
      jobTitle: 'Editor of the publishing house',
      companyName: 'National University',
      location: 'Uzhhorod, Ukraine',
      description:
        'Experienced editor managing content creation, refinement, and publication processes. Specializing in editorial oversight, content quality control, and collaboration with authors to ensure high standards of writing and timely publication.',
    },
    // {
    //   id: '4',
    //   startDate: '2020/05',
    //   endDate: '2021/12',
    //   jobTitle: 'Construction Engineer',
    //   companyName: 'Block-PM Sp. z o.o.',
    //   location: 'Warsaw, Poland',
    //   description:
    //     'Managed construction activities, coordinated with project teams, and ensured timely project completion.',
    // },
    // {
    //   id: '5',
    //   startDate: '2015',
    //   endDate: '2020',
    //   jobTitle: 'Own construction company',
    //   companyName: 'Elit-remont',
    //   location: 'Kiev, Ukraine',
    //   description:
    //     'Owned and operated a construction company, managing various construction projects from inception to completion.',
    // },
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
    { id: '16', title: 'JavaScript' },
    { id: '16', title: 'TypeScript' },
    { id: '11', title: 'Angular' },

    { id: '7', title: 'HTML' },
    { id: '8', title: 'CSS' },
    { id: '16', title: 'SCSS' },

    { id: '16', title: 'SASS' },
    { id: '11', title: 'Angular Materials' },
    { id: '11', title: 'Angular CLI' },

    { id: '17', title: 'Bootstrap' },
    { id: '31', title: 'Figma' },
    { id: '12', title: 'RxJS' },

    { id: '12', title: 'NgRx' },
    { id: '9', title: 'Node.js' },
    { id: '22', title: 'RESTful API' },

    { id: '26', title: 'MongoDB' },
    { id: '27', title: 'SQL' },
    { id: '10', title: 'Swagger' },

    { id: '13', title: 'Docker' },
    { id: '18', title: 'Webpack' },
    { id: '14', title: 'Git' },

    { id: '15', title: 'Hg Mercurial' },
    { id: '29', title: 'Jira' },
    { id: '32', title: 'Adobe XD' },

    { id: '35', title: 'Prettier' },
    { id: '35', title: 'Vercel' },
    { id: '36', title: 'Netlify' },
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
