import { Component, Input, inject } from '@angular/core';

import { WorkExperience } from '../resume.model';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  @Input() experience?: WorkExperience;
  resumeService = inject(ResumeService);
}
