import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TutorialsTable } from '../client';
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
  step: TutorialsTable = null!;
  @Output()
  stepChanged = new EventEmitter<TutorialsTable>();
  editor: Editor|undefined;
  html = '';

  edit(click:MouseEvent) {
    click.stopPropagation();
    this.editor = new Editor();
    this.html = this.step.text || '';
    this.editor.view.focus();
    
  }

  save() {
    if (this.editor) {
      this.step.text =  this.html;
      this.stepChanged.emit(this.step);
      this.editor.destroy();
      this.editor = undefined;
    }
  }

  ngOnDestroy(): void {
    this.editor?.destroy();
  }
}
