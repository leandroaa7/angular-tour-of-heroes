//import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent. This component is interested in the route's parameters extracted from the URL. 
import { Location } from '@angular/common'; //The location is an Angular service for interacting with the browser. You'll use it to navigate back to the view that navigated here.

import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //@Input() private hero: Hero;
  private hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) { }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id'); //the + operator converts the string to a number
    //the backticks ( ` ) that define a JavaScript template literal for embedding the id.
    this.heroService.getHero(id).subscribe(hero => { this.hero = hero })
  };

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getHero();
  }

}
