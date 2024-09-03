import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameDataService } from '../game-data.service';
import { Game } from '../model/game.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-game-details',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('500ms ease-in', style({ opacity: 1 }))
      ]),
    ]),
  ]
})
export class GameDetailsComponent implements OnInit {
  game : Game | undefined
  constructor(private route:ActivatedRoute, private gameDataService: GameDataService){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log("in game details for:", id)
      this.game = this.gameDataService.getGamesById(id)
  }

}
