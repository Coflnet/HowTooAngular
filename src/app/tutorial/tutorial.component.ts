import { Component } from '@angular/core';
import { GetSteps, Tutorials } from '../client';
import { StepComponent } from '../step/step.component';
import { CommonModule } from '@angular/common';
import { NgxSortableModule } from 'ngx-sortable';
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [StepComponent, CommonModule, NgxSortableModule, CdkDropList, CdkDrag],
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.scss'
})
export class TutorialComponent {
  tutorial: Tutorials = {
    name: "Tutorial - name",
    steps: [
      { image_url: "https://coflnet.com/static/sky-image.png", description: "Step 1" },
      { image_url: "https://coflnet.com/static/sky-image.png", description: "Step 2" },
    ] as GetSteps[]
  } as Tutorials;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tutorial.steps, event.previousIndex, event.currentIndex);
  }
  stepChanged() {
    throw new Error('Method not implemented.');
  }
}
