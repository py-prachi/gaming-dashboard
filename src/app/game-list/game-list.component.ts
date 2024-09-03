import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game.model';
import { GameDataService } from '../game-data.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [CommonModule,MatCardModule, RouterModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent implements OnInit {


  games: Game[] = [];

  constructor(private gameDataService:GameDataService){}

  ngOnInit(): void {
    this.games = this.gameDataService.getGames();
  }

  addToFavourite(game: Game){
    console.log(game)

  }

}
