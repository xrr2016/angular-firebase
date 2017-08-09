import { Component } from '@angular/core';
import Hero from './class/hero'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string
  desc: string
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ]
  myHero = this.heroes[0]

  constructor() {
    this.title = 'Tour of Heroes'
    this.desc = 'Identity'
  }

  getVal ():number {
    return 10
  }

  deleteHero (hero):void {
    this.heroes.splice(this.heroes.findIndex(hero => hero.id === hero.id), 1)
  }
}











