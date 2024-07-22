import { Component, Input } from '@angular/core';

import { WorkExperience } from '../resume.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  @Input() experience?: WorkExperience;
}
