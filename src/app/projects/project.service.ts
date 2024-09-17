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
      title: 'Booking API',
      technology: 'Node.js <em>MongoDB</em>',
      description: `

<p>The <strong>Booking API</strong> is a powerful and scalable backend solution designed for managing reservations across various domains such as events, meetings, spaces, or resources. Built using modern web technologies, this API enables seamless integration, allowing clients to create, update, and manage reservations while handling user authentication, roles, and scheduling conflicts efficiently.</p>

<h5>Key Features:</h5>
<ul>
  <li><strong>User Authentication and Role Management:</strong>
    <ul>
      <li>Supports user registration and login via JWT (JSON Web Tokens).</li>
      <li>Role-based access control (RBAC), ensuring that only authorized users can manage or view reservations.</li>
      <li>Different roles such as Admin, Organizer, and User with specific access permissions.</li>
    </ul>
  </li>
  
  <li><strong>Reservation Management:</strong>
    <ul>
      <li>Allows users to create, update, delete, and view reservations.</li>
      <li>Reservation details include start date, end date, time slots, location, and user information.</li>
      <li>Supports recurring reservations (e.g., weekly, monthly).</li>
      <li>Handles scheduling conflicts with existing reservations.</li>
    </ul>
  </li>
  
  <li><strong>Comprehensive Search and Filter Capabilities:</strong>
    <ul>
      <li>Users can search for available reservations based on filters like date, time, location, or user.</li>
      <li>Supports advanced filtering and sorting of reservations to quickly find relevant data.</li>
    </ul>
  </li>
  
  <li><strong>API Documentation with Swagger:</strong>
    <ul>
      <li>Fully documented API using Swagger, allowing easy integration for developers.</li>
      <li>Includes detailed endpoints, request/response examples, and error codes to help developers integrate the API into their applications.</li>
    </ul>
  </li>

  <li><strong>Data Security and Validation:</strong>
    <ul>
      <li>Input validation ensures only valid data is processed by the API.</li>
      <li>Includes secure password handling (hashed passwords with salts).</li>
      <li>Protected endpoints requiring valid JWT tokens for authorized access.</li>
    </ul>
  </li>

  <li><strong>Notifications and Webhooks:</strong>
    <ul>
      <li>Integration with notification services (such as email or SMS) to send reminders and confirmations for reservations.</li>
      <li>Supports webhooks to notify external services when a reservation is created, updated, or canceled.</li>
    </ul>
  </li>

  <li><strong>Scalability and Performance:</strong>
    <ul>
      <li>Designed with scalability in mind to handle a large number of concurrent users and reservations.</li>
      <li>Optimized for performance with efficient querying and caching where needed.</li>
    </ul>
  </li>

  <li><strong>External Service Integration:</strong>
    <ul>
      <li>Can be integrated with payment gateways for paid reservations (e.g., event tickets, room bookings).</li>
      <li>Integrated with external calendar systems like Google Calendar for seamless event management.</li>
    </ul>
  </li>

  <li><strong>Reports and Analytics:</strong>
    <ul>
      <li>Provides reports and analytics to track reservation trends, cancellations, and user activity.</li>
      <li>Admin users can generate CSV or PDF reports for data analysis.</li>
    </ul>
  </li>
</ul>

<h5>Technology Stack:</h5>
<ul>
  <li><strong>Backend Framework:</strong> Node.js with Express.js</li>
  <li><strong>Database:</strong> MongoDB (NoSQL), with support for relational databases if needed</li>
  <li><strong>Authentication:</strong> JWT for stateless, secure user sessions</li>
  <li><strong>Documentation:</strong> Swagger UI for detailed API documentation</li>
  <li><strong>Caching:</strong> Redis or in-memory cache for performance improvements</li>
  <li><strong>Validation:</strong> Input validation using libraries like Joi or express-validator</li>
</ul>

<h2>Example API Endpoints:</h2>
<ul>
  <li><strong>Authentication:</strong>
    <ul>
      <li><code>POST /api/auth/register</code>: Register a new user</li>
      <li><code>POST /api/auth/login</code>: Login and receive JWT token</li>
    </ul>
  </li>
  
  <li><strong>Reservations:</strong>
    <ul>
      <li><code>GET /api/reservations</code>: Get all reservations with optional filters (e.g., by date, location)</li>
      <li><code>POST /api/reservations</code>: Create a new reservation</li>
      <li><code>PUT /api/reservations/:id</code>: Update an existing reservation</li>
      <li><code>DELETE /api/reservations/:id</code>: Delete a reservation</li>
    </ul>
  </li>

  <li><strong>Users:</strong>
    <ul>
      <li><code>GET /api/users</code>: Retrieve a list of users (Admin only)</li>
      <li><code>GET /api/users/:id</code>: Retrieve user details by ID</li>
      <li><code>PUT /api/users/:id</code>: Update user profile</li>
    </ul>
  </li>
</ul>

<h5>Use Cases:</h5>
<ul>
  <li><strong>Event Booking:</strong> Users can book seats or tickets for events, with an easy-to-use reservation system that handles recurring bookings and sends reminders.</li>
  <li><strong>Meeting Room Scheduling:</strong> Users can schedule rooms for meetings, checking availability and avoiding conflicts.</li>
  <li><strong>Resource Management:</strong> Perfect for managing reservations for shared resources like cars, equipment, or spaces.</li>
</ul>


`,
      imageUrl:
        'https://www.synnexmetrodata.com/wp-content/uploads/2024/04/3.png',
      imageBigUrl:
        'https://www.ibexa.co/var/site/storage/images/_aliases/ibexa_content_full/3/4/1/0/300143-1-eng-GB/d4255a27c1fa-AdobeStock_261705271_What-is-an-API.jpeg',
      projectUrl: 'https://reservation-api-gamma.vercel.app/reservations',
      gitHubUrl: 'https://github.com/Anatolii-Stoliarenko/reservation-api',
    },
    {
      id: '5',
      title: 'Booking',
      technology: 'Angular Rest API <em>NgRx</em> ',
      description: `
<p>The <strong>Booking App</strong> is a comprehensive web-based solution designed to streamline the process of booking and managing reservations across various venues, events, or resources. Built using modern web technologies, this app enables users to efficiently create, manage, and track reservations while offering administrative controls for managing users, spaces, and schedules. Whether it's for event spaces, meeting rooms, or resource allocation, the app is tailored to provide a seamless user experience and maximize resource utilization.</p>

<h5>Key Features:</h5>

<h6>User Authentication and Management:</h6>
<ul>
  <li><strong>User Authentication:</strong> Secure login and registration using modern authentication methods, ensuring only authorized access to the platform.</li>
  <li><strong>User Roles:</strong> Role-based access control, allowing for different user permissions (e.g., Admin, Organizer, Regular User).</li>
  <li><strong>Profile Management:</strong> Users can manage their profiles, update personal information, and track their reservation history.</li>
</ul>

<h6>Reservation Management:</h6>
<ul>
  <li><strong>Create and Manage Reservations:</strong> Users can easily create new reservations by selecting the venue, date, time, and additional details.</li>
  <li><strong>Recurring Reservations:</strong> Support for recurring reservations (daily, weekly, or custom intervals), allowing users to manage repeated bookings effortlessly.</li>
  <li><strong>Conflict Handling:</strong> Built-in conflict management ensures that no double bookings occur, alerting users if a selected time slot is already reserved.</li>
</ul>

<h6>Advanced Search and Filtering:</h6>
<ul>
  <li><strong>Date and Time Filters:</strong> Users can search for available time slots based on specific dates, times, or even recurring patterns.</li>
  <li><strong>Space and Resource Filters:</strong> Search and filter based on available spaces (e.g., meeting rooms, event halls) or resources (e.g., projectors, equipment).</li>
  <li><strong>User and Admin Views:</strong> Regular users can view their own reservations, while admins have an overview of all reservations made within the system.</li>
</ul>

<h6>Notifications and Alerts:</h6>
<ul>
  <li><strong>Email Notifications:</strong> Users receive confirmation emails for each reservation they make, along with reminders before their reserved time.</li>
  <li><strong>Admin Alerts:</strong> Admins receive notifications when new reservations are made or when issues arise with a reservation.</li>
</ul>

<h6>Administrative Features:</h6>
<ul>
  <li><strong>User Management:</strong> Admins can view, add, or remove users, and assign roles to control access levels.</li>
  <li><strong>Space and Resource Management:</strong> Admins can manage the list of available spaces and resources, adjusting availability or closing venues as needed.</li>
  <li><strong>Analytics and Reporting:</strong> Generate reports on reservations, usage statistics, cancellations, and more to gain insights into the usage of the system.</li>
</ul>

<h5>Technology Stack:</h5>
<ul>
  <li><strong>Frontend:</strong> Angular for building a dynamic and interactive user interface, ensuring a responsive and intuitive experience across devices.</li>
  <li><strong>Backend:</strong> Node.js with Express.js for handling user authentication, reservations, and overall system management.</li>
  <li><strong>Database:</strong> MongoDB (NoSQL) for storing user, reservation, and venue data, ensuring fast data access and flexibility.</li>
  <li><strong>Authentication:</strong> Secure authentication using JWT (JSON Web Tokens) for a stateless and scalable approach.</li>
  <li><strong>API Documentation:</strong> Swagger-based API documentation for easy integration and communication between frontend and backend services.</li>
</ul>

<h5>Use Cases:</h5>
<ul>
  <li><strong>Event Reservation:</strong> Users can book event spaces such as conference rooms, auditoriums, or outdoor venues with a few clicks, ensuring they have the space reserved for their specific needs.</li>
  <li><strong>Meeting Room Scheduling:</strong> Corporate users can efficiently schedule meeting rooms and associated resources (e.g., projectors, laptops) for their meetings.</li>
  <li><strong>Resource Allocation:</strong> Allows organizations to manage shared resources like vehicles, equipment, or facilities through a structured reservation system.</li>
</ul>

<h5>Benefits:</h5>
<ul>
  <li><strong>Efficient Resource Management:</strong> Maximize the use of available spaces and resources by reducing scheduling conflicts and improving resource allocation.</li>
  <li><strong>Time-Saving:</strong> Users can quickly search for available slots and make reservations with ease, reducing manual booking overhead.</li>
  <li><strong>Better User Experience:</strong> With a responsive interface and intuitive design, users can interact with the system effortlessly from any device.</li>
  <li><strong>Scalability:</strong> The platform is built with scalability in mind, allowing it to grow with the organization's needs and accommodate more users and spaces over time.</li>
</ul>
`,
      imageBigUrl:
        'https://thesweetsetup.com/wp-content/uploads/2023/11/Fantastical-iPhone-Best-Calendar-Hero-6.jpg',
      imageUrl: 'assets/booking.png',
      projectUrl: 'https://foksal.vercel.app//',
      gitHubUrl: 'https://github.com/Anatolii-Stoliarenko/churchApp',
    },
    {
      id: '3',
      title: 'Medium clone',
      technology: 'Angular Rest API <em>NgRx</em> ',
      description: `
<p>The <strong>Medium Clone App</strong> is a fully functional blogging platform inspired by Medium. It allows users to create, manage, and interact with articles while providing features like user authentication, content feeds, and article tagging. This app is perfect for users looking to engage with writing and reading content in a modern and user-friendly environment. Built using state-of-the-art technologies, it ensures a smooth and scalable experience for both users and administrators.</p>

<h5>Key Features</h5>

<h6>User Authentication and Profile Management</h6>
<ul>
  <li><strong>JWT-based Authentication:</strong> Secure user login and registration using JSON Web Tokens (JWT) to handle session management.</li>
  <li><strong>User Profiles:</strong> Each user has a personal profile where they can edit their bio, view their articles, and see followers.</li>
  <li><strong>Follow Users:</strong> Allows users to follow other authors and view articles in their personalized feed.</li>
</ul>

<h6>Article Management</h6>
<ul>
  <li><strong>Create, Edit, and Delete Articles:</strong> Users can create new articles and manage their posts by editing or deleting them as necessary.</li>
  <li><strong>Markdown Support:</strong> Articles are written using Markdown, allowing for simplified formatting that users are familiar with.</li>
  <li><strong>Global and Personalized Feed:</strong> Users can view a global feed of all published articles or a personalized feed based on the authors they follow.</li>
</ul>

<h6>Interactive Features</h6>
<ul>
  <li><strong>Comments:</strong> Users can comment on articles, fostering interaction between authors and readers.</li>
  <li><strong>Likes and Favorites:</strong> Articles can be liked or added to a list of favorites, giving users a way to show appreciation for content and save it for later.</li>
</ul>

<h6>Advanced Search and Filtering</h6>
<ul>
  <li><strong>Tag System:</strong> Articles can be tagged with relevant topics, making it easy for users to filter and search content based on their interests.</li>
  <li><strong>Search and Filter:</strong> Users can search articles by tags, author, or date, and sort them for better navigation through the platform.</li>
</ul>

<h5>Technology Stack</h5>
<ul>
  <li><strong>Angular:</strong> The frontend is built with Angular, providing a reactive, dynamic user experience.</li>
  <li><strong>RxJS:</strong> Used for handling asynchronous data streams and real-time updates throughout the application.</li>
  <li><strong>NgRx:</strong> A state management library used to maintain a predictable and scalable state across the app.</li>
  <li><strong>Node.js:</strong> The backend is powered by Node.js, offering a scalable environment for managing API requests and server-side operations.</li>
  <li><strong>Express.js:</strong> The lightweight web framework used for handling routes and server logic in the backend.</li>
  <li><strong>MongoDB:</strong> NoSQL database used to store user data, articles, and interactions efficiently.</li>
  <li><strong>JWT (JSON Web Tokens):</strong> Used for secure, stateless authentication, enabling safe user login and session management.</li>
  <li><strong>SCSS:</strong> For styling the application, providing flexible and scalable CSS styles.</li>
  <li><strong>TypeScript:</strong> Ensures type safety and scalability in both the frontend and backend codebase.</li>
</ul>

<h5>Use Cases</h5>
<ul>
  <li><strong>Personal Blogging:</strong> Users can write, manage, and share articles, allowing for personal expression and content creation.</li>
  <li><strong>Content Discovery:</strong> The app enables users to discover new articles based on personalized recommendations and global content.</li>
  <li><strong>Community Engagement:</strong> Through comments and follows, users can engage with other authors and build a community around shared interests.</li>
</ul>

<h5>Summary of Technologies</h5>
<ul>
  <li><strong>Angular:</strong> For the dynamic and responsive frontend interface.</li>
  <li><strong>RxJS:</strong> Managing real-time updates and asynchronous data streams.</li>
  <li><strong>NgRx:</strong> For state management, ensuring a consistent and scalable data flow.</li>
  <li><strong>Node.js:</strong> Server-side runtime for managing API and backend logic.</li>
  <li><strong>Express.js:</strong> Lightweight framework for building the backend API.</li>
  <li><strong>MongoDB:</strong> NoSQL database used for efficient data storage and retrieval.</li>
  <li><strong>JWT (JSON Web Tokens):</strong> Secure user authentication and session management.</li>
  <li><strong>SCSS:</strong> For styling the frontend with flexibility and modularity.</li>
  <li><strong>TypeScript:</strong> Used for both frontend and backend development to maintain type safety and scalability.</li>
</ul>
`,
      imageUrl: 'assets/medium-full.png',
      projectUrl: 'https://ng-medium-clone.netlify.app/',
      imageBigUrl:
        'https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      gitHubUrl: 'https://github.com/Anatolii-Stoliarenko/medium-clone',
    },
    {
      id: '1',
      title: 'Task App',
      technology: 'Angular TypeScript <em>SCSS</em> ',
      description: `
<p><strong>TaskApp</strong> is a task management application designed to help you stay organized and boost your productivity. Built with Angular and deployed on Netlify, this application offers a seamless and efficient user experience.</p>

<h6>Key Features:</h6>
<ul>
  <li><strong>Task Management:</strong> Create, update, and delete tasks effortlessly.</li>
  <li><strong>Status Filtering:</strong> Filter tasks by status (Open, In Progress, Completed) to focus on your priorities.</li>
  <li><strong>Persistent Storage:</strong> Tasks are saved in the browser's local storage, ensuring they remain even after closing the browser.</li>
  <li><strong>Responsive Design:</strong> Enjoy a smooth experience on both desktop and mobile devices.</li>
  <li><strong>User-Friendly Interface:</strong> A clean and intuitive design that makes managing tasks simple.</li>
</ul>

<h6>Technologies Used:</h6>
<ul>
  <li><strong>Frontend:</strong> Angular</li>
  <li><strong>Deployment:</strong> Netlify</li>
  <li><strong>Storage:</strong> Browser local storage</li>
</ul>

`,
      imageUrl: 'assets/task-full.png',
      imageBigUrl:
        'https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      projectUrl: 'https://ngtask.netlify.app',
      gitHubUrl: 'https://github.com/Anatolii-Stoliarenko/angular-tasks',
    },
    {
      id: '2',
      title: 'Task List',
      technology: 'Angular TypeScript <em>SCSS</em> ',
      description: `
<p>The <strong>Task List</strong> feature allows you to quickly add new tasks, modify existing ones, or delete them when completed. Users can assign specific details to each task such as priority, deadlines, and descriptions, making task management efficient and comprehensive.</p>

<h6>Status Filtering</h6>
<p>Filter tasks by their status to stay focused on what matters most. You can easily filter tasks into categories such as <strong>Open</strong>, <strong>In Progress</strong>, and <strong>Completed</strong>, ensuring that you're always aware of the progress of your tasks. This makes it easier to prioritize and focus on tasks that are important at any given time.</p>

<h6>Persistent Storage</h6>
<p>Your tasks are saved in the browser's local storage, ensuring that no data is lost even if you close the browser. This feature ensures that your tasks are always available when you return to the app, providing a seamless experience without the need for constant saving or reloading.</p>

<h6>Responsive Design</h6>
<p>The app is built with a fully responsive design, ensuring that you have a smooth and user-friendly experience on both desktop and mobile devices. Whether you are using a phone, tablet, or computer, ng-Task-List adapts to your screen size and provides an intuitive interface for managing tasks on the go.</p>

<h6>Task Prioritization and Deadlines</h6>
<p>You can assign priorities to tasks (Low, Medium, High) to ensure that the most critical tasks are handled first. Additionally, tasks can have deadlines, helping you stay organized and meet important deadlines without stress.</p>

<h6>Recurring Tasks</h6>
<p>The app supports recurring tasks, making it easy to schedule repeating tasks (e.g., weekly meetings, monthly reports). This allows users to automate repetitive tasks, reducing the need for manual task creation each time.</p>

<h6>Search and Filter</h6>
<p>The search and filter functionality helps users find specific tasks quickly. You can filter tasks based on keywords, priorities, and statuses, allowing for easier task management in larger lists.</p>

<h6>Notifications and Reminders</h6>
<p>Built-in notifications and reminders help ensure you never miss a task or deadline. Users receive alerts for upcoming deadlines or overdue tasks, helping to stay on top of important to-dos.</p>

<p>These enhanced features combine to provide a powerful, user-friendly task management system that keeps you organized and productive.</p>

`,
      imageUrl: 'assets/task-full-1.png',
      imageBigUrl:
        'https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      projectUrl: 'https://ng-task-list.netlify.app/',
      gitHubUrl: 'https://github.com/Anatolii-Stoliarenko/Task-list',
    },

    {
      id: '4',
      title: 'Invest App',
      description: `
<p>The <strong>Invest App</strong> is a user-friendly tool designed to help individuals calculate and visualize their potential returns on investments over time. Whether you are saving for retirement, planning for a major purchase, or simply exploring investment options, this app provides a seamless and accurate way to forecast your investment growth. Built using modern web technologies, the app ensures a smooth user experience and allows for complex calculations with ease.</p>

<h5>Key Features</h5>

<h6>Compound Interest Calculation</h6>
<p>Accurately calculates compound interest on investments based on input parameters such as the principal amount, interest rate, and the number of periods. The app supports multiple compounding frequencies (daily, monthly, yearly), giving users the flexibility to model their investments as needed.</p>

<h6>Interactive Graphs and Charts</h6>
<p>The app provides dynamic graphs and charts that visually represent the growth of investments over time. Users can easily see how their initial investments grow with interest, helping them to make informed decisions about their financial future.</p>

<h6>Flexible Inputs</h6>
<p>Users can input various parameters such as investment amount, interest rate, investment period, and contribution frequency. This allows for custom scenarios to fit specific financial goals, providing personalized insights into future returns.</p>

<h6>Real-time Results</h6>
<p>As users input data, the results update in real-time, giving instant feedback on how changes in the interest rate, contribution frequency, or investment period affect the overall returns. This ensures a fast and responsive user experience.</p>

<h6>Responsive Design</h6>
<p>The app is built with a fully responsive design, making it accessible on all devices, including desktop, tablet, and mobile. Users can calculate their investments on the go without sacrificing functionality or user experience.</p>

<h6>Customization Options</h6>
<p>Users can customize the calculation settings to match their exact needs, such as adjusting compounding periods, changing the interest rates, or setting up recurring investments. These flexible options make the app suitable for a wide range of financial planning scenarios.</p>

<h6>Simple and Clean User Interface</h6>
<p>The interface is designed to be intuitive and simple, allowing users to focus on calculating their investments without getting overwhelmed by complex input fields or unnecessary features. This design makes the app accessible to both novice investors and seasoned professionals.</p>

<h5>Technology Stack</h5>
<ul>
  <li><strong>Angular:</strong> The frontend framework used to create a dynamic and interactive user experience.</li>
  <li><strong>TypeScript:</strong> Used for both the frontend logic, providing type safety and scalability.</li>
  <li><strong>SCSS:</strong> For flexible and maintainable styling, ensuring a responsive and visually appealing design.</li>
  <li><strong>Netlify:</strong> Deployed on Netlify for fast and reliable hosting with continuous integration and delivery.</li>
</ul>
`,
      imageUrl: 'assets/invest.png',
      technology: 'Angular TypeScript <em>SCSS</em> ',
      imageBigUrl:
        'https://www.bankrate.com/2023/10/02125200/what-is-growth-investing.jpeg?auto=webp&optimize=high&crop=16:9&width=912',
      projectUrl: 'https://investcalcapp.netlify.app/',
      gitHubUrl: 'https://github.com/Anatolii-Stoliarenko/invest-calc-Angular',
    },
  ];
}
