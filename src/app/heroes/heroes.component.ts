//import { HEROES } from '../mock-heroes';
import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private hero: Hero = { id: 1, name: 'WindStorm' }
  private heroes: Array<Hero> = [];

  /*
   *apresentar heroi selecionado
   *private selectedHero: Hero;
   *onSelect(hero: Hero): void {  this.selectedHero = hero;  } 
   */

  //Reserve the constructor for simple initialization such as wiring constructor parameters to properties.
  //The constructor shouldn't do anything. 
  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes(); //sync
    this.heroService
      .getHeroes()
      .subscribe(heroesReturn => this.heroes = heroesReturn); //async
  }

  ngOnInit() {
    this.getHeroes();
  }

}
