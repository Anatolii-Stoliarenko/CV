import { Component, Input } from '@angular/core';

import { WorkExperience } from '../../resume.model';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css'],
})
export class ExperienceCardComponent {
  @Input() experience?: WorkExperience;
}
