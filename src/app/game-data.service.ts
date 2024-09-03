import { Injectable } from '@angular/core';
import { Game } from './model/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  constructor() { }

  private games: Game[] = [
    {
      id: 1,
      name: 'Space Adventure',
      description: 'Explore the galaxy and discover new planets!',
      imageUrl: 'space-adventure.jpg',
      genre: 'Adventure',
      releaseDate: '2022-01-01'
    },
    {
      id: 2,
      name: 'Mystery Mansion',
      description: 'Solve puzzles in a haunted mansion.',
      imageUrl: 'mystery-mansion.jpg',
      genre: 'Puzzle',
      releaseDate: '2023-05-15'
    },
    {
      id: 3,
      name: 'Minecraft',
      description: 'Build your own city',
      imageUrl: 'minecraft.jpg',
      genre: 'Adventure',
      releaseDate: '2017-05-17'
    },
]

getGames(): Game []{
  return this.games;
}
getGamesById(id:number): Game | undefined {
  return this.games.find(game=>game.id === id)
}

}
