import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
})
export class AppComponent {
  title = 'Code Shots With Profanis - Like and Subscribe :)';
}
