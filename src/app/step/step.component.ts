import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { GetSteps } from '../client';
import { Editor, NgxEditorModule } from 'ngx-editor';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-step',
  standalone: true,
  imports: [NgxEditorModule, FormsModule, CommonModule, 
    MatIconModule, MatButtonModule,
    ],
  templateUrl: './step.component.html',
  styleUrl: './step.component.scss'
})
export class StepComponent {
  _step: GetSteps = null!;
  @Input()
  set step(step: GetSteps) {
    this._step = step;
    this.html = step.description || '';
    this.hasCoordiantes = !!this.step.marker;
    if (this.hasCoordiantes) {
      // parse string to number
      this.updateCoordinates();
    }
  }
  private updateCoordinates() {
    this.x = Number(this.step.marker!['x']);
    this.y = Number(this.step.marker!['y']);
  }

  get step() {
    return this._step;
  }
  @Output()
  stepChanged = new EventEmitter<GetSteps>();
  @Output()
  remove = new EventEmitter<GetSteps>();
  @ViewChild('container')
  set imageRenderedRef(element: ElementRef) {
    var image = element.nativeElement as HTMLImageElement;
    console.log('imageRenderedRef', image);
    const ratio = image.clientWidth / image.naturalWidth;
    if (this.hasCoordiantes) {
      this.updateCoordinates();
      this.x = this.x * ratio;
      this.y = this.y * ratio;
      console.log('adjusted coordinates', this.x, this.y)
      var rartioToScreen = image.clientWidth / window.innerWidth;
      this.zoomedX = this.x / rartioToScreen;
      this.zoomedY = this.y / rartioToScreen;
      console.log('zoomed coordinates', this.zoomedX, this.zoomedY)
    }
  }
  editor: Editor | undefined;
  html = '';
  hasCoordiantes = false;
  x = 0;
  y = 0;
  zoomedX = 0;
  zoomedY = 0;
  zoomed = false;


  edit(click: MouseEvent) {
    click.stopPropagation();
    this.editor = new Editor();
    this.html = this.step.description || '';
    setTimeout(() => {

      this.editor?.view.focus();
    }, 10);

  }

  save() {
    if (this.editor) {
      this.step.description = this.html;
      this.stepChanged.emit(this.step);
      this.editor.destroy();
      this.editor = undefined;
    }
  }

  triggerRemove() {
    this.remove.emit(this.step);
  }

  ngOnDestroy(): void {
    this.editor?.destroy();
  }

  imageClick(event: MouseEvent) {
    this.zoomed = !this.zoomed;
  }

}
