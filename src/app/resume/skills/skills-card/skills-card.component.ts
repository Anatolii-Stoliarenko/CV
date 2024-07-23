import { Component, Input } from '@angular/core';

import { Skill } from '../../resume.model';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.css'],
})
export class SkillsCardComponent {
  @Input() skillsType?: string;
  @Input() skills?: Skill[];

  // Function to chunk the array into specified sizes
  chunkArray(myArray: Skill[], chunk_size: number): Skill[][] {
    let index = 0;
    const arrayLength = myArray.length;
    const tempArray: Skill[][] = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      const myChunk = myArray.slice(index, index + chunk_size);
      tempArray.push(myChunk);
    }

    return tempArray;
  }
}
