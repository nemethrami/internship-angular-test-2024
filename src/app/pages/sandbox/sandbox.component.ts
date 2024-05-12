import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { MoviesComponent } from '../movies/movies.component';

@Component({
  selector: 'app-sandbox',
  standalone: true,
  imports: [ButtonComponent, MoviesComponent],
  templateUrl: './sandbox.component.html',
  styleUrl: './sandbox.component.scss'
})
export class SandboxComponent {
  counter: number = 0;

  increaseCounter(): void {
    this.counter++;
  }

  decreaseCounter(): void {
    this.counter--;
  }

  isDisabled(): boolean {
    return this.counter === 0;
  }
}
