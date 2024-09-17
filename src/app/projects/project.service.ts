import { Injectable } from '@angular/core';

import { Project } from './projects.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  projects: Project[] = [
    {
      id: '6',
      title: 'Booking-API',
      description: `This project is an API-based reservation system built with Node.js, and MongoDB.
                    - User authentication and role-based access control
                    - Create, update, and manage reservations via RESTful API`,
      imageUrl: 'assets/api.png',
      projectUrl: 'https://reservation-api-gamma.vercel.app/reservations',
      gitHubUrl: 'https://github.com/Anatolii-Stoliarenko/reservation-api',
    },
    {
      id: '5',
      title: 'Booking',
      description: `This project is an Angular and NgRx-based reservation system.
                    - User authentication and registration
                    - Create, edit, and manage reservations`,
      imageUrl: 'assets/booking.png',
      projectUrl: 'https://foksal.vercel.app//',
      gitHubUrl: 'https://github.com/Anatolii-Stoliarenko/churchApp',
    },
    {
      id: '3',
      title: 'Medium clone',
      description: `This project is an Angular and NgRx-based clone of the RealWorld.io web application.
                    - User authentication and registration
                    - Article creation, editing, and deletion`,
      imageUrl: 'assets/medium-clone.png',
      projectUrl: 'https://ng-medium-clone.netlify.app/',
      gitHubUrl: 'https://github.com/Anatolii-Stoliarenko/medium-clone',
    },
    {
      id: '1',
      title: 'Easy task',
      description: `Task Management: Create, edit, and delete tasks with an easy-to-use interface.
                    Due Dates and Reminders: Set due dates for tasks and receive reminders to stay on track.`,
      imageUrl: 'assets/easy-task.png',
      projectUrl: 'https://ngtask.netlify.app',
      gitHubUrl: 'https://github.com/Anatolii-Stoliarenko/angular-tasks',
    },
    {
      id: '2',
      title: 'Task-List',
      description:
        'Task management application designed to help you stay organized and boost your productivity. Built with Angular and deployed on Netlify, this application offers a seamless and efficient user experience.',
      imageUrl: 'assets/task.png',
      projectUrl: 'https://ng-task-list.netlify.app/',
      gitHubUrl: 'https://github.com/Anatolii-Stoliarenko/Task-list',
    },

    {
      id: '4',
      title: 'Investement calkulator',
      description: ` Easily calculate potential investment returns based on different input parameters.
                    User-Friendly Interface: Clean and intuitive interface for a seamless user experience.`,
      imageUrl: 'assets/invest.png',
      projectUrl: 'https://investcalcapp.netlify.app/',
      gitHubUrl: 'https://github.com/Anatolii-Stoliarenko/invest-calc-Angular',
    },
  ];
}
