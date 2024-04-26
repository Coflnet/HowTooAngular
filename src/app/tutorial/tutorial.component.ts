import { Component } from '@angular/core';
import { TutorialsTable } from '../client';
import { StepComponent } from '../step/step.component';
import { CommonModule } from '@angular/common';
import { NgxSortableModule } from 'ngx-sortable';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [StepComponent, CommonModule, NgxSortableModule, CdkDropList, CdkDrag],
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.scss'
})
export class TutorialComponent {
  steps: TutorialsTable[] = [
    { image_path: "https://coflnet.com/static/sky-image.png", text: "Step 1" },
    { image_path: "https://coflnet.com/static/sky-image.png", text: "Step 2" },
  ] as TutorialsTable[];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.steps, event.previousIndex, event.currentIndex);
  }
  stepChanged() {
    throw new Error('Method not implemented.');
  }
}
