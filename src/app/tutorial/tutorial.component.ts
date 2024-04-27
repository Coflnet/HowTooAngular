import { Component } from '@angular/core';
import { GetSteps, Tutorials, TutorialsService } from '../client';
import { StepComponent } from '../step/step.component';
import { CommonModule } from '@angular/common';
import { NgxSortableModule } from 'ngx-sortable';
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [StepComponent, CommonModule, NgxSortableModule, CdkDropList, CdkDrag, FormsModule],
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.scss'
})
export class TutorialComponent {

  tutorial: Tutorials = {
    name: "",
    steps: [] as GetSteps[]
  } as Tutorials;

  constructor(private activeRoute: ActivatedRoute, private tutorialService: TutorialsService) {
    this.activeRoute.params.subscribe(params => {
      this.tutorialService.getListOfStepsFromTutorialIdApiTutorialsTutorialIdGet(params["id"])
        .subscribe(tutorial => this.tutorial = tutorial);
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tutorial.steps, event.previousIndex, event.currentIndex);
    for (let i = 0; i < this.tutorial.steps.length; i++) {
      this.tutorial.steps[i].position = i;
    }
    this.SyncWithServer();
  }
  nameChanged($event: string) {
    this.tutorial.name = $event;
    this.SyncWithServer();
  }
  removeStep(step: GetSteps) {
    this.tutorial.steps = this.tutorial.steps.filter(s => s !== step);
    this.SyncWithServer();
  }
  private SyncWithServer() {
    this.tutorialService.updateTutorialAndStepsApiTutorialsPut(this.tutorial).subscribe();
  }

  stepChanged() {
    console.log("stepChanged");
    this.SyncWithServer();
  }
}
