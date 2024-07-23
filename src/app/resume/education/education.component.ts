import { Component, inject } from '@angular/core';

import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  resumeService = inject(ResumeService);
}
