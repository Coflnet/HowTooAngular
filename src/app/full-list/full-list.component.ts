import { Component } from '@angular/core';
import { Tutorials, TutorialsService } from '../client';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-list',
  standalone: true,
  imports: [ CommonModule, MatListModule],
  templateUrl: './full-list.component.html',
  styleUrl: './full-list.component.scss'
})
export class FullListComponent {
  tutorials: Tutorials[] | null = null;

  constructor(private tutorialService: TutorialsService, private router: Router) { }

  ngOnInit() {
    this.tutorialService.getAllTutorialsApiTutorialsGet().subscribe(tutorials => this.tutorials = tutorials);
  }

  navigate(_t3: Tutorials) {
    this.router.navigate(['/tutorial', _t3.id]);
  }
}
