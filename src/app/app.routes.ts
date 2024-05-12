import { Routes } from '@angular/router';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { MoviesComponent } from './pages/movies/movies.component';

export const routes: Routes = [
    {path: '', redirectTo: 'Movies', pathMatch: 'full'},
    {path: 'Sandbox', component: SandboxComponent},
    {path: 'Movies', component: MoviesComponent}
];
