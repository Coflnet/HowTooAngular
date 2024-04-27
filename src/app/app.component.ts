import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiModule } from './client';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ApiModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HowToo';
}
