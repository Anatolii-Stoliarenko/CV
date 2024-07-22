import { Component, Input } from '@angular/core';

import { Project } from '../projects.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  @Input() project?: Project;

  formatDescription(description: string | undefined): string {
    if (!description) return '';
    // Split the description by newline characters and wrap each part in <p> tags
    return description
      .split('\n')
      .map((part) => `<p>${part.trim()}</p>`)
      .join('');
  }
}
