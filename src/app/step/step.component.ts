import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GetSteps } from '../client';
import { Editor, NgxEditorModule } from 'ngx-editor';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-step',
  standalone: true,
  imports: [NgxEditorModule,FormsModule,CommonModule,MatIconModule,MatButtonModule],
  templateUrl: './step.component.html',
  styleUrl: './step.component.scss'
})
export class StepComponent {
  @Input()
  step: GetSteps = null!;
  @Output()
  stepChanged = new EventEmitter<GetSteps>();
  editor: Editor|undefined;
  html = '';

  edit(click:MouseEvent) {
    click.stopPropagation();
    this.editor = new Editor();
    this.html = this.step.description || '';
    this.editor.view.focus();
    
  }

  save() {
    if (this.editor) {
      this.step.description =  this.html;
      this.stepChanged.emit(this.step);
      this.editor.destroy();
      this.editor = undefined;
    }
  }

  ngOnDestroy(): void {
    this.editor?.destroy();
  }
}
