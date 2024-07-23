import { Component, Input, inject } from '@angular/core';

import { Skill } from '../resume.model';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  resumeService = inject(ResumeService);
  @Input() skillCategory?: string;
  @Input() skills?: Skill[];
}
