import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameListComponent } from './game-list/game-list.component';
import { GameDetailsComponent } from './game-details/game-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameListComponent, GameDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gaming-dashboard';
}
