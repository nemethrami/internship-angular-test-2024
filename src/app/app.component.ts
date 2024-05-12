import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { MoviesComponent } from './pages/movies/movies.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent, 
    RouterOutlet,
    ButtonComponent, 
    SandboxComponent, 
    MoviesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = "Attrecto"
}
